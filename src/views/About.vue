<template>
  <div class="about">
    <section class="about__title">
      <h1>About me</h1>
    </section>
    <article class="about__article">
      <div class="article__content">
        <p>Hi, I'm Jack Domleo, an enthusiastic web developer based in the <a class="link--paragraph" href="https://www.google.com/maps/place/Nottingham/@52.9541053,-1.2401011,12z/data=!3m1!4b1!4m5!3m4!1s0x487832d2390779cd:0x108063201919db15!8m2!3d52.9547832!4d-1.1581086" rel="noreferrer" target="_blank"><address>East Midlands, UK</address></a>, with a strong passion for front-end development and UI/UX.</p>
        <p>I love watching the lifecycle of a software product, from the day it is first planned, to the day it is first released as an MVP and watching it develop through different stages as its life goes on.</p>
        <p>My journey in development began back in 2013, studying Computer Science at GCSE level. After being introduced to programming concepts and Python, I was immediately hooked onto the idea of creating something on screen with code. I self-studied at home and practised lots of different mini scripts with Python and rewriting them better each time. I am glad however, that I did not only just study Computer Science, but I was exposed to a wide variety of GCSE subjects such as, Physics, Mathematics, Further Mathematics, Chemistry, Biology, German, Business Studies, English Language and English Literature.</p>
        <p>After 3 years studying my GCSEs, I began studying my A-Levels in the areas of Computer Science, Physics, Mathematics and Chemistry (AS Level). I created a Python project where I developed my implementation of a <a class="link--paragraph" href="https://github.com/JDomleo/A-Level_Cashier_System" rel="noreferrer" target="_blank">cashier system</a>, which I submitted as my end of year 13 coursework. This was a very interesting project because it made me appreciate the time, effort and thought process gone into a software product. I made mistakes along the way, some I spotted immediately and some I only spotted a few years later, but these are to learn from and if I were to recreate this project, it is extremely likely I would implement totally differently.</p>
        <p>One month after receiving my A-Level results, I started my career as an apprentice, exposing me to the mind-boggling World of web development. From here on, I am always learning new skills and mastering existing skills and plan to do so for many years to come.</p>
        <p>I am currently experienced and competent with HTML5, CSS3, SCSS/Sass, JavaScript, jQuery, Vue.js, TypeScript, which have all proven extremely useful and extremely interesting when developing the front-end. I have briefly touched on languages such as React.js, C# and Python. All the time, every day, I am actively learning, whether if it's on the job or using resources such as <a class="link--paragraph" href="https://app.pluralsight.com/profile/jack-domleo" rel="noreferrer" target="_blank">PluralSight</a>, <a class="link--paragraph" href="https://www.codecademy.com/profiles/JackDomleo" rel="noreferrer" target="_blank">CodeCademy</a> and <a class="link--paragraph" href="https://stackoverflow.com/users/9022878/jdomleo" rel="noreferrer" target="_blank">Stack Overflow</a>. As a developer, you never really stop learning, the industry is forever advancing!</p>
        <p>In my spare time, I love to game on my <a class="link--paragraph" href="https://account.xbox.com/profile?gamertag=orangebarrel747" rel="noreferrer nofollow" target="_blank">Xbox</a>, I like to walk in the sun, support my local ice hockey team (<a class="link--paragraph" href="https://www.panthers.co.uk/" rel="noreferrer nofollow" target="_blank">The Nottingham Panthers</a>) at games and to go on interesting holidays abroad. To relax, I usually sleep, watch Netflix or do what every other developer does... more development.</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
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
  }
}

.article {
  &__content {
    color: $grey-75;
    font-size: 1.25rem;
  }
}
</style>
