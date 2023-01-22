import contentful, { createClient } from 'contentful' // eslint-disable-line import/default

// https://github.com/contentful/contentful.js/issues/1233
const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

export default defineNuxtPlugin(() => {
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