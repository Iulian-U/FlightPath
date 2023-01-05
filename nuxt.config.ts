// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  runtimeConfig: {
    public: {
      api: process.env.AIRLABS_API_KEY,
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-windicss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  css: ["@/assets/css/global.css", "@/assets/css/animations.css"],
  colorMode: {
    classSuffix: "",
  },
});
