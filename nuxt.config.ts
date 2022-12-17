// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-windicss"],
  css: ["@/assets/css/global.css"],
  colorMode: {
    classSuffix: "",
  },
});
