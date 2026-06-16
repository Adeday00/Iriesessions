# Irie Sessions

Archive-first cultural platform for Irie Sessions, built with Next.js and deployed as a static export on Netlify.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shopify Checkout

Product pages add items to a local basket at `/shop/basket`, then a Netlify Function creates a Shopify Cart through the Storefront API and redirects to Shopify checkout.

- Basket page: `src/app/shop/basket/page.tsx`
- Client basket: `src/components/commerce/ShopifyBasket.tsx`
- Cart function: `netlify/functions/create-shopify-cart.mjs`
- Product data: `src/lib/content.ts`

The current Shopify store and product variant IDs are wired as defaults:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=irie-sessions-6873.myshopify.com
NEXT_PUBLIC_SHOPIFY_VARIANT_HAT_BLACK_WHITE=49582180696357
NEXT_PUBLIC_SHOPIFY_VARIANT_BORDERS_ZINE=52564524826917
NEXT_PUBLIC_SHOPIFY_VARIANT_IRIE_STUD_EARRINGS=52564609630501
```

Required Netlify environment variable:

```bash
SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
```

Use the private Storefront API token from Shopify Admin → Headless → Irie Sessions Headless → Storefront API. Keep this server-side only; Netlify injects it into `netlify/functions/create-shopify-cart.mjs`.

Optional Netlify environment variables:

```bash
SHOPIFY_STORE_DOMAIN=irie-sessions-6873.myshopify.com
SHOPIFY_STOREFRONT_API_VERSION=2026-04
```

The public variant environment variables are optional overrides. If Shopify products are deleted and recreated, update the fallback `shopifyVariantId` values in `src/lib/content.ts` or set new Netlify environment variables.
