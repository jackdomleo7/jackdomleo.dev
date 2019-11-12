<template>
  <div class="home">
    <section class="home__intro intro">
      <h1 class="intro__welcome">Hello there!<br>Let me introduce myself...<br>I'm Jack Domleo.</h1>
    </section>
    <section class="home__spotlight spotlight">
      <figure style="width: 100%; height: 100%; background-color: deeppink; margin: 0">Image</figure>
      <figure style="width: 100%; height: 100%; background-color: deepskyblue; margin: 0">CSS Is Awesome</figure>
      <figure style="width: 100%; height: 100%; background-color: orangered; margin: 0">Mitrefinch logo</figure>
      <figure style="width: 100%; height: 100%; background-color: lawngreen; margin: 0">Something else</figure>
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

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
}

.spotlight {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 3rem;
  justify-content: center;

  @media (max-width: 480px) {
    grid-template: 1fr / 1fr;
  }
}
</style>
