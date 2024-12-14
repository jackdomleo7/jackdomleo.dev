import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      contentful: createClient({
        space: config.public.CTF_SPACE_ID,
        accessToken: process.env.NODE_ENV === 'development' ? config.public.CTF_CDA_ACCESS_TOKEN_PREVIEW : config.public.CTF_CDA_ACCESS_TOKEN,
        host: process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : undefined
      }).withoutUnresolvableLinks
    }
  }
})