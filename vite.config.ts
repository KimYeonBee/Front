import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@core": path.resolve(__dirname, "../../packages/core/src"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
    dedupe: ["react", "react-dom", "styled-components"],
  },
});
