// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: '~/assets/main.css'
  },
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    shim: false
  }
})
