import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://k1en.site",
  integrations: [react()],
  devToolbar: { enabled: false },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
