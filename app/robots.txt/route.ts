export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://lyuganhua.org/sitemap.xml\n`;
  return new Response(body, { headers: { "content-type": "text/plain" } });
}

