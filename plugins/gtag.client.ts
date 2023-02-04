import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    bootstrap: false,
    config: {
      id: config.public.GOOGLE_ANALYTICS_ID,
      params: {
        anonymize_ip: true,
      },
    }
  }, nuxtApp.$router)
})