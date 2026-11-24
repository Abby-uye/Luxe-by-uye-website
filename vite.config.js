import dns from "node:dns";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

dns.setDefaultResultOrder("ipv4first");

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true,
  },
});
