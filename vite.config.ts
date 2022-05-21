import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-vite-pwa/",
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "hhhhh is testing",
        short_name: "h test",
        start_url: "/my-vite-pwa/",
        display: "standalone",
        background_color: "#F55536",
        lang: "en",
        scope: "/my-vite-pwa/",
      },
    }),
  ],
});
