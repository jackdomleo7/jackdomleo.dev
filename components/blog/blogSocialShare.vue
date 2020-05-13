<template>
  <ul class="social-share">
    <li role="presentation">
      Share:
    </li>
    <li v-for="(socialShare, index) in SocialShares" :key="index" :aria-setsize="SocialShares.length" :aria-posinset="index + 1">
      <a :href="socialShare.url" rel="nofollow noopener" target="_blank" data-cooltipz-dir="bottom" :aria-label="'Share on ' + socialShare.platform">
        <svg-icon :name="socialShare.platform.toLowerCase()" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface ISocialShare {
  platform: string;
  url: string;
}

@Component
export default class BlogSocialShare extends Vue {
  @Prop({
    type: String,
    required: true
  }) private readonly pageTitle!: string;

  @Prop({
    type: String,
    required: true
  }) private readonly route!: string;

  @Prop({
    type: Array
  }) private readonly hashtags!: string[];

  private SocialShares: ISocialShare[] = [
    {
      platform: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${this.pageTitle}&via=jackdomleo7&url=https://jackdomleo.dev${this.route}${this.hashtags ? '&hashtags=' + this.hashtags.join(',') : ''}`
    },
    {
      platform: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=https://jackdomleo.dev${this.route}&title=${this.pageTitle}&summary=${this.pageTitle}&source=blog.jackdomleo.dev${this.route}`
    }
  ]
}
</script>

<style lang="scss" scoped>
.social-share {
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-bottom: 0;
  margin: 1rem 0 3rem;
  padding-left: 0;

  li {
    display: inline-block;
  }

  a {
    display: block;
    color: inherit;
    transition: color 160ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
}
</style>
