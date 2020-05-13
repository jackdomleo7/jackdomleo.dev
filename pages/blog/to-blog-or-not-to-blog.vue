<template lang="md">
  <blog-header :page-title="pageTitle" :date="new Date('2020-05-13')" :readMinutes="3" :hashtags="['blog', 'blogging', 'developer', 'developers', 'developercommunity', 'freeCodeCamp']" :lead="pageDescription" />

  A blog has been on my to do list for a while but never had the guts to go through with it. Why? From the time of this article, I've only been a developer for 618 days (that's approximately 1 year and 8 months) and I've always felt I've never seen enough of the developer community to start writing about it. I always felt too young and too inexperienced.

  I have come to realise that no matter what age you are in the development community, you are somewhat young and inexperienced because it's a forever changing, fast moving industry. Whether you've got 20 years of experience or 1 year and 8 months experience, if a new web framework was released tomorrow, you'd both be inexperienced in it and relatively young to the framework's lifecycle. However, it's a given that the person with 20 years of experience would have seen many more frameworks, therefore would have more experience in recognising framework patterns, but that's OK.

  I always had the fear I would write something wrong, but it's just a blog, there's **no right or wrong answer**, it's just your thoughts, not everyone has to agree. You have to be ready to accept **any** feedback.

  Today, we are living in a strange World where Coronavirus has taken over and like many others, I have been made furloughed. I've decided to take this time to work on many projects (but that's a story for another time) and that includes working on a blog section on my website.

  I took the time to read other people's blogs, some of my favourites are [DEV](https://dev.to?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog), [CSS-Tricks](https://css-tricks.com?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog) and [CodePen](https://blog.codepen.io?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog). I also took time to read some blogs from some of my colleagues at [Mitrefinch](https://www.mitrefinch.co.uk?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog), such as [Jamie Lord](https://lord.technology/blog?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog). Reading about other people write about their experiences inspired me to write my own.

  Coincidentally, I came across a blog on freeCodeCamp that was released at approximately the same time I was considering creating a blog called [How to Overcome Your Fear of Writing and Find Motivation to Start](https://www.freecodecamp.org/news/overcoming-your-fear-of-writing-and-how-you-can-find-motivation?ref=jackdomleo.dev/blog/to-blog-or-not-to-blog). **If you take anything away from this blog post, take that link, it was the final step to convincing me creating a blog.** I love the way they talk about "Imposter Syndrome", that's definitely one of the main things that got to me.

  I never knew what to write about. That's OK. You don't need to know, don't plan your blogs, let your blogs plan themselves. If you are learning something you find interesting, write about it, don't plan to learn something just so you can write about it. If you attended an event, write about it. If you found a lack of documentation on something that others may find useful, write about it. Did some weird bug happen in your code? Write about it.

  I'm not the best writer, I achieved a grade B in GCSE English Language and a grade C in GCSE English Literature and my vocabulary range is next to nothing, but with a blog, I can improve those skills. (My apologies for the plain basic structure in this blog, it is my first one 😉).

  Before I waffle on too much more, that's my story on creating a blog. I'm really hoping my blog will:
  - Improve my writing skills
  - Help others learn and be inspired to write their own blogs
  - Inspire young developers to not be shy and share their experiences with the more senior developers
  - Strengthen my learning and knowledge and improve my confidence
</template>

<script>
import { BlogHeader } from '@/components';

export default {
  components: { BlogHeader },
  data () {
    return {
      pageTitle: 'To Blog or Not to Blog',
      pageDescription: 'Writing a blog can be daunting and scary for anyone. The thought of criticism and humiliation crosses your mind. What convinced me to write a blog and why do I recommend it to others?'
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

<style lang="scss" scoped>
@import '@/assets/styles/markdown';
</style>
