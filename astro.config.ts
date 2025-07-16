import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import bun from "@hedystia/astro-bun";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import robots from "astro-robots";
import vtbot from "astro-vtbot";

export default defineConfig({
  site: "http://localhost:4321",
  adapter: bun(),
  integrations: [
    react(),
    icon(),
    vtbot({
      loadingIndicator: false,
    }),
    favicons({
      name: "Astro Basics",
      short_name: "Astro Basics",
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
        yandex: false,
      },
    }),
    sitemap(),
    robots(),
    compress(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      PUBLIC_URL: envField.string({
        context: "client",
        access: "public",
        default: "http://localhost:4321",
      }),
    },
  },
});
