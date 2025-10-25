import { serveFile } from "https://deno.land/std@0.203.0/http/file_server.ts";

Deno.serve(async (req) => {
  const { pathname, searchParams } = new URL(req.url);

  // 首页：返回 HTML
  if (pathname === "/") {
    return await serveFile(req, "./index.html");
  }
  if (pathname === "/manifest.plist") {
    return await serveFile(req, "./manifest.plist");
  }
  if (pathname === "/NBPro_v3.6.2.ipa") {
    return await serveFile(req, "./NBPro_v3.6.2.ipa");
  }
  // 兜底：404
  return new Response("Not Found", { status: 404 });
});
