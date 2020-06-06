<template lang="md">
  <article class="markdown">
    <blog-header :page-title="pageTitle" :date="new Date('2020-06-06')" :readMinutes="1" :hashtags="['ie', 'InternetExplorer', 'web', 'browsers']" :lead="pageDescription" />

    - Microsoft dropped support for versions IE10 and below as of <time datetime="2016-01-12">12<sup>th</sup> January 2016</time>
    - Microsoft strongly advised its users to move to Microsoft Edge because IE11 and below are not secure
    - Supporting Internet Explorer could mean **double** the development time because Internet Explorer cannot handle the new funky CSS like flexbox
    - It's old, when someone says "a modern browser", absolutely no one thinks of Internet Explorer
    - Internet Explorer is not an [evergreen browser](https://www.techopedia.com/definition/31094/evergreen-browser)

    Hopefully this convinced you to not support this awful browser created by Microsoft, in my opinion, Internet Explorer has held back the future of web development for many years. Once [it dies](https://death-to-ie11.com), I can see web development improving at a faster rate.

    If that didn't convince you, check out the below resources:
    - [Death to IE11](https://death-to-ie11.com)
    - [Lifecycle FAQ - Internet Explorer and Edge](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge)
    - [Microsoft really doesn’t want you to use Internet Explorer anymore](https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution)

    If you absolutely must support Internet Explorer, then maybe consider displaying a warning message to the user that they will/may recieve a degraded experience and advise them to upgrade to a modern browser.
  </article>
</template>

<script>
import { BlogHeader } from '@/components';

export default {
  components: { BlogHeader },
  data () {
    return {
      pageTitle: 'Why to not support Internet Explorer',
      pageDescription: 'So you\'re thinking of supporting Internet Explorer? Don\'t.'
    };
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.pageDescription },
        { hid: 'og:description', name: 'og:description', content: this.pageDescription }
      ]
    };
  }
};
</script>
