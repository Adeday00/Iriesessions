const DEFAULT_SHOPIFY_STORE_DOMAIN = "irie-sessions-6873.myshopify.com";
const DEFAULT_API_VERSION = "2026-04";

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function normalizeDomain(domain) {
  return String(domain || DEFAULT_SHOPIFY_STORE_DOMAIN)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

function normalizeMerchandiseId(id) {
  const value = String(id || "").trim();

  if (value.startsWith("gid://shopify/ProductVariant/")) {
    return value;
  }

  if (/^\d+$/.test(value)) {
    return `gid://shopify/ProductVariant/${value}`;
  }

  return "";
}

function normalizeLines(lines) {
  if (!Array.isArray(lines)) {
    return [];
  }

  return lines
    .map((line) => ({
      merchandiseId: normalizeMerchandiseId(line?.merchandiseId),
      quantity: Number(line?.quantity),
    }))
    .filter((line) => line.merchandiseId && Number.isInteger(line.quantity) && line.quantity > 0);
}

function getStorefrontAuthHeader(accessToken) {
  if (accessToken.startsWith("shpat_")) {
    return { "Shopify-Storefront-Private-Token": accessToken };
  }

  return { "X-Shopify-Storefront-Access-Token": accessToken };
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!accessToken) {
    return json(500, { error: "Shopify Storefront API token is not configured." });
  }

  let body;

  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid checkout request." });
  }

  const lines = normalizeLines(body.lines);

  if (lines.length === 0) {
    return json(400, { error: "Basket is empty." });
  }

  const domain = normalizeDomain(process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN);
  const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION || DEFAULT_API_VERSION;
  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const mutation = `
    mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getStorefrontAuthHeader(accessToken),
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          lines,
        },
      },
    }),
  });

  const payload = await response.json();

  if (!response.ok || payload.errors?.length) {
    return json(response.status || 502, {
      error: payload.errors?.[0]?.message || "Shopify cart creation failed.",
    });
  }

  const userError = payload.data?.cartCreate?.userErrors?.[0];

  if (userError) {
    return json(400, { error: userError.message });
  }

  const checkoutUrl = payload.data?.cartCreate?.cart?.checkoutUrl;

  if (!checkoutUrl) {
    return json(502, { error: "Shopify did not return a checkout URL." });
  }

  return json(200, {
    checkoutUrl,
    cartId: payload.data.cartCreate.cart.id,
    totalQuantity: payload.data.cartCreate.cart.totalQuantity,
  });
}
