<template>
  <div class="home">
    <h1>
      Hey, I'm Jack Domleo
    </h1>
    <p>
      I'm a front-end developer from Nottingham, UK. You happened to have stumbled across my corner of the internet, welcome!
    </p>

    <details-card />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { DetailsCard } from '@/components';

@Component({
  components: { DetailsCard }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 30em) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>
