import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // 👇 KEY PART:
  // - When we build for GitHub Pages: mode = "github" → base = "/link-tree/"
  // - For everything else (dev, Vercel, etc.): base = "/"
  base: mode === "github" ? "/link-tree/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
