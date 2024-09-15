import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ingresosGastos/", // Nombre de tu repositorio en GitHub
  server: {
    host: "0.0.0.0",
  },
});
