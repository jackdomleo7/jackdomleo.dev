<template>
  <page-template page-title="Portfolio">
    <p>You found one of my easter egg pages! 👏</p>
    <p>I often question what is considered to be a developer's portfolio, here is my answer.</p>
    <p>I consider my portfolio to be everything I have done tech-related, however, to be a marketable employee, a hiring manager or recruiter only has time for maybe 2 of the following:</p>
    <ul>
      <li>Your CV/resume</li>
      <li>Your <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">LinkedIn</a> profile</li>
      <li>Your <a href="https://github.com" target="_blank" rel="nofollow noopener">GitHub</a> projects</li>
    </ul>
    <p>If a hiring manager or recruiter had more time, or someone just generally visiting my <i>stuff</i>, I'd hope they would recognise the following:</p>
    <ul>
      <li>My CV/resume (for hiring manager's eyes only)</li>
      <li>My <a href="https://linkedin.com/in/jackdomleo7" target="_blank" rel="nofollow noopener">LinkedIn</a> profile</li>
      <li>My <a href="https://github.com/jackdomleo7" target="_blank" rel="nofollow noopener">GitHub</a> projects</li>
      <li>My <a href="https://codepen.io/jackdomleo7" target="_blank" rel="nofollow noopener">CodePen</a> projects</li>
      <li>
        My blog <nuxt-link to="/blog">
          here
        </nuxt-link> or on <a href="https://dev.to/jackdomleo7" target="_blank" rel="nofollow noopener">DEV.to</a>
      </li>
      <li>My <a href="https://twitter.com/jackdomleo7" target="_blank" rel="nofollow noopener">Twitter</a> profile</li>
    </ul>
    <p>My tweet below I feel is still relevant as a motivational factor, because it is really good for a developer to spread out their focus on more than just GitHub. 😊</p>
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

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'What goes into a portfolio? And what does a hiring manager or a recruiter see?' },
        { hid: 'og:description', name: 'og:description', content: 'What goes into a portfolio? And what does a hiring manager or a recruiter see?' }
      ]
    };
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>

</style>
