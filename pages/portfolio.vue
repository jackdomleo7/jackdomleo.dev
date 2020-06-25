<template>
  <page-template page-title="Portfolio">
    <p><strong>You're looking at it! 👀</strong></p>
    <p>I consider my professional developer portfolio to be built up of the following:</p>
    <ul>
      <li v-for="(portfolio, index) in portfolios" :key="portfolio.name" :aria-setsize="portfolios.length" :aria-posinset="index + 1">
        <a v-if="portfolio.url.startsWith('http')" :href="portfolio.url" rel="nofollow noopener">{{ portfolio.name }}</a>
        <nuxt-link v-else :to="portfolio.url">
          {{ portfolio.name }}
        </nuxt-link>
      </li>
    </ul>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Remember, there is more to a developer&#39;s portfolio than <a href="https://twitter.com/hashtag/GitHub?src=hash&amp;ref_src=twsrc%5Etfw">#GitHub</a>!<a href="https://twitter.com/hashtag/Developers?src=hash&amp;ref_src=twsrc%5Etfw">#Developers</a> strive for amazing GitHub profile but miss the bigger picture.<br><br>Your portfolio can also be:<br>- <a href="https://twitter.com/CodePen?ref_src=twsrc%5Etfw">@CodePen</a><br>- Twitter contributions<br>- LinkedIn contributions<br>- Articles<br>- Web presence<br><br>Anymore? <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a>
      </p>&mdash; Jack Domleo (@jackdomleo7) <a href="https://twitter.com/jackdomleo7/status/1271890411750121478?ref_src=twsrc%5Etfw">June 13, 2020</a>
    </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { PageTemplate } from '@/components';

interface portfolio {
  name: string;
  url: string;
}

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Portfolio'
    };
  }
})
export default class Index extends Vue {
  private readonly portfolios: portfolio[] = [
    {
      name: 'This website',
      url: '/'
    },
    {
      name: 'My GitHub',
      url: 'https://github.com/JDomleo'
    },
    {
      name: 'My CodePen',
      url: 'https://codepen.io/JackDomleo'
    },
    {
      name: 'My Twitter presense, tweets and contributions',
      url: 'https://twitter.com/jackdomleo7'
    },
    {
      name: 'My LinkedIn',
      url: 'https://www.linkedin.com/in/jack-domleo'
    },
    {
      name: 'My articles on DEV (can also be found in my blog)',
      url: 'https://dev.to/jackdomleo7'
    }
  ]
}
</script>

<style lang="scss" scoped>

</style>
