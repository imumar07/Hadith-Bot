import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import hadithOfDay from "../api/hadith-of-day.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  // Only the read-only hadith endpoint is wired here on purpose -
  // /api/tweet posts a real tweet and must never run from a page load.
  if (url.pathname === "/api/hadith-of-day") {
    const mockRes = {
      statusCode: 200,
      status(code) {
        this.statusCode = code;
        return this;
      },
      setHeader(key, value) {
        res.setHeader(key, value);
      },
      json(body) {
        res.writeHead(this.statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify(body));
      },
    };
    await hadithOfDay(req, mockRes);
    return;
  }

  const filePath = path.join(root, url.pathname === "/" ? "/index.html" : url.pathname);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }
    const type = MIME[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});
