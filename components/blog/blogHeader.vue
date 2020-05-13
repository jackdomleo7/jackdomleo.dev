<template lang="md">
  <nuxt-link class="blog__back" to="/blog">
    <svg-icon name="arrow-left" />
    Back to blogs
  </nuxt-link>

  # {{ pageTitle }}

  [//]: <> (https://niram.org/read)
  <time :datetime="articleDate.datetime" :title="date.toDateString()">{{ articleDate.date }}</time> &#8729; {{ readMinutes }} minute read

  <i><template v-for="hashtag in hashtags">#{{ hashtag }} </template></i>

  <social-share :page-title="pageTitle" :hashtags="hashtags" :route="$route.path" />

  **{{ lead }}**
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { format } from 'date-fns';
import SocialShare from './blogSocialShare.vue';

interface IArticleDate {
  datetime: string;
  date: string;
}

@Component({
  components: { SocialShare }
})
export default class BlogHeader extends Vue {
  @Prop({
    type: String,
    required: true
  }) private readonly pageTitle!: string;

  @Prop({
    type: Date,
    required: true
  }) private readonly date!: Date;

  @Prop({
    type: Number,
    required: true
  }) private readonly readMinutes!: number;

  @Prop({
    type: Array
  }) private readonly hashtags!: string[];

  @Prop({
    type: String,
    required: true
  }) private readonly lead!: string;

  private get articleDate (): IArticleDate {
    return {
      datetime: format(this.date, 'yyyy-MM-dd'),
      date: format(this.date, 'do MMMM yyyy')
    };
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__back {
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
}
</style>
