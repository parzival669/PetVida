import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse large JSON payloads for Base64 photos
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API to save uploaded photos directly to public directory on disk
  app.post("/api/save-photos", (req, res) => {
    try {
      const { photos } = req.body;
      if (!photos || typeof photos !== "object") {
        return res.status(400).json({ error: "Invalid photos payload" });
      }

      const publicDir = path.join(process.cwd(), "public");
      
      // Ensure public directory exists
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const savedFiles: string[] = [];

      for (const [staffId, dataUrl] of Object.entries(photos)) {
        if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:")) {
          continue;
        }

        // Extract base64 content
        const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          continue;
        }

        const buffer = Buffer.from(matches[2], "base64");
        
        // Define all matching lowercase and cased filenames to guarantee loading under any strategy
        let filenames: string[] = [];
        if (staffId === "isabella") {
          filenames = ["Isabella.jpg", "isabella.jpg"];
        } else if (staffId === "maria-eduarda") {
          filenames = ["Maria Eduarda.jpg", "maria-eduarda.jpg", "Maria-Eduarda.jpg", "maria_eduarda.jpg"];
        } else if (staffId === "giulia") {
          filenames = ["Giulia.jpg", "giulia.jpg"];
        } else if (staffId === "renata") {
          filenames = ["Renata.jpg", "renata.jpg"];
        } else if (staffId === "larissa") {
          filenames = ["Larissa.jpg", "larissa.jpg"];
        } else if (staffId === "maria-luiza") {
          filenames = ["Maria Luiza.jpg", "maria-luiza.jpg", "Maria-Luiza.jpg", "maria_luiza.jpg"];
        } else if (staffId === "maria-natalia") {
          filenames = ["Maria Natália.jpg", "Maria Natalia.jpg", "maria-natalia.jpg", "Maria-Natalia.jpg", "maria_natalia.jpg"];
        }

        for (const filename of filenames) {
          const filepath = path.join(publicDir, filename);
          fs.writeFileSync(filepath, buffer);
          savedFiles.push(filename);
        }
      }

      console.log(`Saved photos to disk successfully: ${savedFiles.join(", ")}`);
      return res.json({ success: true, files: savedFiles });
    } catch (error: any) {
      console.error("Failed to save photos to disk", error);
      return res.status(500).json({ error: error.message });
    }
  });

  // API to check if custom photos exist on the server's disk
  app.get("/api/check-photos", (req, res) => {
    try {
      const publicDir = path.join(process.cwd(), "public");
      const list = fs.existsSync(publicDir) ? fs.readdirSync(publicDir) : [];
      return res.json({ files: list });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  });

  // Serve static public assets in development or production
  const distPath = path.join(process.cwd(), "dist");
  const publicDir = path.join(process.cwd(), "public");
  
  if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
