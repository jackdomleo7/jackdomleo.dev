<template>
  <div class="about">
    <section class="about__title">
      <h1>About me</h1>
    </section>
    <article v-for="(question, index) in questions" :key="index" class="about__article">
      <h2 class="article__title">{{ question.title }}</h2>
      <component class="article__content" :is="question.component"></component>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WhoAmI from '@/partials/about/WhoAmI.vue';
import WhatIsMyDeveloperExperience from '@/partials/about/WhatIsMyDeveloperExperience.vue';

@Component({
  components: { WhoAmI, WhatIsMyDeveloperExperience },
})
export default class About extends Vue {
  private readonly questions: object[] = [
    {
      title: 'Who am I?',
      component: WhoAmI,
    },
    {
      title: 'What is my developer experience?',
      component: WhatIsMyDeveloperExperience,
    },
    {
      title: 'What about development interests me the most?',
      component: WhoAmI,
    },
    {
      title: 'What do I do in my spare time?',
      component: WhoAmI,
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.about {
  &__title {
    h1 {
      font-size: 2.8rem;
      margin: 0;
    }
  }

  &__article {
    margin: 4rem 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.article {
  &__title {
    font-size: 1.3rem;
    font-style: italic;
    margin-bottom: 1.4rem;
  }

  &__content {
    color: $grey-75;
    font-size: 1rem;
  }
}
</style>
