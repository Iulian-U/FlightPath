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
      "@nuxtjs/i18n",
      {
        vueI18n: {
          legacy: false,
          locale: "en",
          messages: {
            en: require("./lang/en"),
            it: require("./lang/it"),
            ro: require("./lang/ro"),
          },
        },
      },
    ],
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
