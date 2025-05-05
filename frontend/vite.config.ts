import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Replit-specific plugins (disabled on production)
const replPlugins = [];

if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  const cartographer = require("@replit/vite-plugin-cartographer");
  replPlugins.push(cartographer.cartographer());
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...replPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
