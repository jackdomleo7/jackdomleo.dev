---
title: How to protect state in Pinia
description: Pinia, unlike Vuex, allows the state to be mutated directly, but sometimes we want to protect the state from being changed willy-nilly.
published_time: 2024-04-07
tags: [Vue]
---

[Pinia](https://pinia.vuejs.org/) is a relatively new state management tool for the Vue ecosystem. It is the new preferred state management tool recommended by the Vue core team replacing Vuex. Compared to [Vuex](https://vuex.vuejs.org/), Pinia is type-safe by default ([direct-vuex](https://github.com/paroi-tech/direct-vuex) was needed to make Vuex type-safe), extremely lightweight, and modular by design (meaning you can create multiple stores instead of multiple modules inside one store, which optimises performance). Similar to Vuex, Pinia has state, computed properties (getters) and methods (mutations and actions). _Read more about Pinia and its usage to understand the similarities and differences between Pinia and Vuex._

Vuex's state is automatically protected, whereas Pinia's state is not. In Vuex, you could not directly edit the state, to do so you needed a mutation method that would edit or "mutate" the state for you. If you tried editing the state directly in Vuex, you would be faced with the following error message, `"Error: [vuex] do not mutate vuex store state outside mutation handlers."`

But with Pinia, the state is exposed and can be mutated willy nilly from anywhere within your application. In a lot of cases, this is fine and actually makes state management a lot easier and simpler because in these cases there is no need for a mutation method whose sole purpose is to update a state property with the value you passed to the mutation method.

In some cases though, this might not be ideal. For example, we are building a rugby game in Vue (it's just an example, go with it). Unlike with football (or soccer for you Americans) where the scoring system increments by 1 whenever a goal is scored, rugby's scoring system increases by a different number depending on how those points were scored. 5 points for a try, 3 points for a penalty, 2 points for a conversion, and 3 points for a drop goal.

We want to be able to protect the score state property by only allowing it to be mutated in a specific way. We can easily do this by creating an exposed computed property that returns the state, and not exposing the state property.

```ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useRugbyStore = defineStore('rugbyStory', () => {
  const _score = ref<number>(0);

  const score = computed(() => _score.value);

  function scorePoints(type: 'try'|'penalty'|'conversion'|'drop goal'): void {
    switch (type) {
      case 'try':
        _score.value += 5;
        break;
      case 'penalty':
      case 'drop goal':
        _score.value += 3;
        break;
      case 'conversion':
        _score.value += 2;
        break;
    }
  }

  return { score, scorePoints };
})
```

In the example above, `_score` (annotated prefixed with an underscore to show it is internal) can be read via the score computed property, but cannot be mutated directly. Since score is a computed property, Vue does not allow its value to be changed, if you try editing the value of score, you will get the following TypeScript error, `"Cannot assign to "score" because it is a read-only property."`

One caveat to this though is that score or _score will never appear in Pinia's global state or in the Vue devtools Pinia panel, so keep this in mind.

I feel this is quite a simple, neat, easy-to-maintain, and type-safe method of protecting Pinia state. I have found other methods of protecting state such as [this example](https://github.com/vuejs/pinia/issues/58#issuecomment-983284955) using Vue's `readonly()` method but I didn't find this to be type-safe or very nice to use.


