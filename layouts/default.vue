<template>
  <div class="app">
    <navbar />
    <main class="app__main">
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Navbar, TheFooter } from '@/components';
import Theme from '@/middleware/theme';

@Component({
  components: { Navbar, TheFooter }
})
export default class Default extends Vue {
  private mounted () {
    this.setTheme();
  }

  private setTheme (): void {
    const savedTheme: string | null = localStorage.getItem(Theme.localStorageThemeVar);
    if (savedTheme === 'light') {
      document.querySelector('html')!.classList.add('theme--light');
    } else if (savedTheme == null) {
      const preferredTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (preferredTheme === 'light') {
        document.querySelector('html')!.classList.add('theme--light');
      }
      localStorage.setItem(Theme.localStorageThemeVar, preferredTheme);
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      max-width: 62.5em;
      padding: 1.5rem;
    }
  }
}
</style>
