import { TAffiliateProviders } from "@/types"
import { TRichText } from "@/types/cms/TRichText"

const AFFILIATE_PROVIDERS_PRISMIC_VAR = '#{AFFILIATE_PROVIDERS}'

function affiliateProviders (providers: TAffiliateProviders[]): string {
  if (providers.length <= 0) {
    return ''
  }
  else if (providers.length === 1) {
    return providers[0]
  }
  else {
    const lastProvider = providers.splice(-1)[0]
    return `${providers.join(', ')} and ${lastProvider}`
  }
}

export function populateAffiliateProviders (text: TRichText, providers: TAffiliateProviders[]): TRichText {
  const providersString = affiliateProviders(providers)

  if(providersString === '') {
    return text
  }
  else {
    text = text.map(x => {
      x.text = x.text.replace(AFFILIATE_PROVIDERS_PRISMIC_VAR, providersString)
      return x
    })
  
    return text
  }
}