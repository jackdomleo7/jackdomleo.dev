<template>
  <div class="page">
    <Navigation />
    <main id="maincontent">
      <div class="container container--thinner error-page">
        <p class="error-page__code" aria-hidden="true">404</p>
        <h1 class="error-page__title">This page has been abducted by aliens</h1>
        <p class="error-page__body">
          Our search party has combed the galaxy and returned empty-handed.
          Whatever you were looking for is probably living its best life on a distant planet.
          We wish it well.
        </p>
        <button class="error-page__cta" @click="handleGoHome">Beam me home</button>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue';
import SiteFooter from './components/SiteFooter.vue';

defineProps<{
  error: { statusCode: number; message: string }
}>();

useHead({
  title: 'Page Not Found',
});

function handleGoHome() {
  clearError({ redirect: '/' });
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    margin-top: 9rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 8rem;
    }
  }
}

.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-block: 4rem;
  gap: 1.5rem;
  max-width: 60rem;

  &__code {
    font-family: var(--font-family-roboto-mono);
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    color: var(--color-accent);
    margin: 0;

    @media (min-width: $responsive-standard-tablet) {
      font-size: 10rem;
    }
  }

  &__title {
    font-size: var(--text-subtitle);
    font-weight: 700;
    color: var(--color-primary);
    margin: 0;
  }

  &__body {
    font-size: var(--text-body);
    color: var(--color-mid-grey);
    max-width: 36rem;
    line-height: 1.7;
    margin: 0;
  }

  &__cta {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.75rem 2rem;
    background-color: var(--color-accent);
    color: #fff;
    font-family: var(--font-family-roboto);
    font-size: var(--text-body);
    font-weight: 700;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
      background-color: color-mix(in srgb, var(--color-accent) 80%, #000);
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 3px solid var(--color-accent);
      outline-offset: 3px;
    }
  }
}
</style>
