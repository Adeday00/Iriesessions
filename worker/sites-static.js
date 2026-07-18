const HTML_HEADERS = {
  "cache-control": "no-cache",
};

async function fetchAsset(request, env, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return env.ASSETS.fetch(new Request(url, request));
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const direct = await env.ASSETS.fetch(request);

    if (direct.status !== 404) {
      return direct;
    }

    const path = decodeURIComponent(url.pathname);
    const hasExtension = /\.[^/]+$/.test(path);

    if (!hasExtension) {
      const htmlPath = path === "/" ? "/index.html" : `${path.replace(/\/$/, "")}.html`;
      const html = await fetchAsset(request, env, htmlPath);

      if (html.status !== 404) {
        const headers = new Headers(html.headers);
        for (const [name, value] of Object.entries(HTML_HEADERS)) {
          headers.set(name, value);
        }
        return new Response(html.body, {
          status: html.status,
          statusText: html.statusText,
          headers,
        });
      }
    }

    const notFound = await fetchAsset(request, env, "/404.html");
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};

export default worker;
