export namespace Twitter {
  export interface DestructuredUrl {
    title: string;
    domain: 'https://twitter.com';
    username: string;
    tweetId: string;
  }
}

function urlExtractor (url: string, title: string): Twitter.DestructuredUrl {
  url = url.replace('https://twitter.com/', '').split('?')[0]
  const urlSplit = url.split('/')

  return {
    title: title.replace('Twitter: ', '').replace('Tweet: ', ''),
    domain: 'https://twitter.com',
    username: urlSplit[0],
    tweetId: urlSplit[2]
  }
}

export default {
  urlExtractor
}