import { createServer } from "http";
import { parse } from "url";
import { readFileSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Import API handlers
import { POST as contactHandler } from "./api/contact";

// Create HTTP server
const server = createServer(async (req, res) => {
  const parsedUrl = parse(req.url || "", true);
  const path = parsedUrl.pathname || "/";

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle API routes
  if (path.startsWith("/api/")) {
    const endpoint = path.replace("/api/", "");

    // Contact API endpoint
    if (endpoint === "contact" && req.method === "POST") {
      try {
        const response = await contactHandler(req as unknown as Request);

        // Extract status and headers from Response object
        const status = response.status;
        const headers = Object.fromEntries(response.headers.entries());

        // Set response headers
        Object.entries(headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });

        // Set status code
        res.writeHead(status);

        // Send response body
        const body = await response.text();
        res.end(body);
      } catch (error) {
        console.error("API error:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      }
      return;
    }

    // API endpoint not found
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "API endpoint not found" }));
    return;
  }

  // Not an API route, return 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

// Start server
const PORT = process.env.API_PORT || 3001;
server.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

export default server;
