import contentful from 'contentful'
import { createClient } from 'contentful'

// https://github.com/contentful/contentful.js/issues/1233
const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  return {
    provide: {
      contentful: createClientFunc({
        space: config.public.CTF_SPACE_ID,
        accessToken: config.public.CTF_CDA_ACCESS_TOKEN
      })
    }
  }
})