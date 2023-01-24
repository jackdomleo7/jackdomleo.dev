import { encode, decode } from "html-entities";

export namespace Codepen {
  export interface DestructuredUrl {
    title: string;
    domain: 'https://codepen.io';
    username: string;
    type: string;
    id: string;
    lazyload: boolean;
  }
}

function urlExtractor (url: string, title: string): Codepen.DestructuredUrl {
  url = url.replace('https://codepen.io/', '')
  title = decode(title).replace('CodePen: ', '')
  const urlSplit = url.split('?')
  url = urlSplit[0]

  let lazyload = false
  if (urlSplit.length === 2) {
    const params = urlSplit[1].split('&')
    const lazyloadParam = params.find(x => x.startsWith('lazyload'))

    if (lazyloadParam && lazyloadParam.split('=')[1] === 'true') {
      lazyload = true
    }
  }

  const username = url.split('/')[0]
  const type = url.split('/')[1]
  const id = url.split('/')[2]

  return {
    title,
    domain: 'https://codepen.io',
    username,
    type,
    id,
    lazyload
  }
}

export default {
  urlExtractor
}