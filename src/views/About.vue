<template>
  <div class="about h-card">
    <h1 class="page--title">About me</h1>
    <article class="about__article">
      <div class="article__content">
        <p>Hi, I'm <span class="p-name">Jack Domleo</span>, an enthusiastic web developer based in <site-link type="external" link="https://www.google.com/maps/place/Nottingham/@52.9541053,-1.2401011,12z/data=!3m1!4b1!4m5!3m4!1s0x487832d2390779cd:0x108063201919db15!8m2!3d52.9547832!4d-1.1581086"><address><span class="p-locality">Nottingham</span>, <span class="p-country-name">UK</span></address></site-link>, with a strong passion for front-end development and UI/UX.</p>
        <p>I love watching the lifecycle of a software product, from the day it is first planned, to the day it is first released as an MVP and watching it develop through different stages as its life goes on.</p>
        <p>My journey in development began back in 2013, studying Computer Science at GCSE level. After being introduced to programming concepts and Python, I was immediately hooked onto the idea of creating something on screen with code. I self-studied at home and practised lots of different mini scripts with Python and rewriting them better each time. I am glad however, that I did not only just study Computer Science, but I was exposed to a wide variety of GCSE subjects such as, Physics, Mathematics, Further Mathematics, Chemistry, Biology, German, Business Studies, English Language and English Literature.</p>
        <p>After 3 years studying my GCSEs, I began studying my A-Levels in the areas of Computer Science, Physics, Mathematics and Chemistry (AS Level). I created a Python project where I developed my implementation of a <site-link type="external" link="https://github.com/JDomleo/A-Level_Cashier_System">cashier system</site-link>, which I submitted as my end of year 13 coursework. This was a very interesting project because it made me appreciate the time, effort and thought process gone into a software product. I made mistakes along the way, some I spotted immediately and some I only spotted a few years later, but these are to learn from and if I were to recreate this project, it is extremely likely I would implement totally differently.</p>
        <p>One month after receiving my A-Level results, I started my career as an apprentice, exposing me to the mind-boggling World of web development. From here on, I am always learning new skills and mastering existing skills and plan to do so for many years to come.</p>
        <p>I am currently experienced and competent with <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SCSS</strong>/<strong>Sass</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong>, <strong>Vue.js</strong> and <strong>TypeScript</strong>, which have all proven extremely useful and extremely interesting when developing the front-end. I have briefly touched on languages such as <strong>React.js</strong>, <strong>C#</strong> and <strong>Python</strong>. All the time, every day, I am actively learning, whether if it's on the job or using resources such as <site-link type="external" link="https://app.pluralsight.com/profile/jack-domleo">PluralSight</site-link>, <site-link type="external" link="https://www.codecademy.com/profiles/JackDomleo">CodeCademy</site-link> and <site-link type="external" link="https://stackoverflow.com/users/9022878/jdomleo">Stack Overflow</site-link>. As a developer, you never really stop learning, the industry is forever advancing!</p>
        <p>In my spare time, I love to game on my <site-link type="external" link="https://account.xbox.com/profile?gamertag=orangebarrel747">Xbox</site-link>, I like to walk in the sun, support my local ice hockey team (<site-link type="external" link="https://www.panthers.co.uk/">The Nottingham Panthers</site-link>) at games and to go on interesting holidays abroad. To relax, I usually sleep, watch Netflix/Disney+ or do what every other developer does... more development.</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SiteLink } from '@/components';

@Component({
  components: { SiteLink },
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.about {
  &__article {
    margin: 4rem 0;
  }
}

.article {
  &__content {
    color: var(--color-grey-75);
    font-size: 1rem;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }
  }
}
</style>
