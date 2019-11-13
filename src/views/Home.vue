<template>
  <div class="home">
    <section class="home__intro intro">
      <h1 class="intro__welcome">Hello there!<br>Let me introduce myself...<br>I'm Jack Domleo.</h1>
    </section>
    <section class="home__spotlight spotlight">
      <figure style=" background-color: deeppink;
  height: 100%;
  margin: 0;
  width: 100%;">Image</figure>
      <figure style=" background-color: deepskyblue;
  height: 100%;
  margin: 0;
  width: 100%;">CSS Is Awesome</figure>
      <figure style=" background-color: orangered;
  height: 100%;
  margin: 0;
  width: 100%;">Mitrefinch logo</figure>
      <figure style=" background-color: lawngreen;
  height: 100%;
  margin: 0;
  width: 100%;">Something else</figure>
    </section>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {

    },
  })
  export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.home {
  display: grid;
  grid-template: auto / 1fr 1fr;
  grid-template-areas: "intro spotlight";

  @media (max-width: 1290px) {
    grid-template: auto auto / 1fr;
    grid-template-areas: "intro" "spotlight";
  }

  &__intro {
    grid-area: intro;
    margin-right: 2rem;

    @media (max-width: 1290px) {
      margin-right: 0;
    }
  }

  &__spotlight {
    grid-area: spotlight;
    margin-left: 2rem;

    @media (max-width: 1290px) {
      margin-left: 0;
    }
  }
}

.intro {
  align-items: center;
  display: flex;

  &__welcome {
    color: $grey-75;
    font-size: 3rem;
    line-height: 1.5;

    @media (max-width: 730px) {
      font-size: 2.6rem;
    }

    @media (max-width: 525px) {
      font-size: 2rem;
    }

    @media (max-width: 420px) {
      font-size: 1.6rem;
    }
  }
}

.spotlight {
  display: grid;
  grid-gap: 3rem;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: center;

  @media (max-width: 480px) {
    grid-template: 1fr / 1fr;
  }
}
</style>
