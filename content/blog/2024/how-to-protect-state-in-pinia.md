---
title: How to Create Readonly State in Pinia
description: Learn how to create readonly state in Pinia to protect your Vue.js store data. Discover type-safe methods for state protection with practical examples and best practices.
published_time: 2024-04-07
modified_time: 2025-08-24
tags: [Vue]
---

[Pinia](https://pinia.vuejs.org/) is a relatively new state management tool for the Vue ecosystem. It is the new preferred state management tool recommended by the Vue core team replacing Vuex. Compared to [Vuex](https://vuex.vuejs.org/), Pinia is type-safe by default ([direct-vuex](https://github.com/paroi-tech/direct-vuex) was needed to make Vuex type-safe), extremely lightweight, and modular by design (meaning you can create multiple stores instead of multiple modules inside one store, which optimises performance). Similar to Vuex, Pinia has state, computed properties (getters) and methods (mutations and actions). _Read more about Pinia and its usage to understand the similarities and differences between Pinia and Vuex._

## The State Protection Problem

Vuex's state is automatically protected, whereas **Pinia's state is not**. In Vuex, you could not directly edit the state—to do so you needed a mutation method that would edit or "mutate" the state for you. If you tried editing the state directly in Vuex, you would be faced with the following error message: `"Error: [vuex] do not mutate vuex store state outside mutation handlers."`

But with Pinia, the state is exposed and can be mutated willy-nilly from anywhere within your application. In a lot of cases, this is fine and actually makes state management a lot easier and simpler because in these cases there is no need for a mutation method whose sole purpose is to update a state property with the value you passed to the mutation method.

However, certain scenarios require **readonly state** protection to maintain data integrity and enforce proper state management patterns.

## Creating Readonly State in Pinia

Unlike Vuex's built-in state protection, Pinia exposes state directly, allowing mutations from anywhere in your application. While this simplifies development, certain scenarios require **readonly state** protection to maintain data integrity.

The most effective approach for creating **Pinia readonly state** is using Vue's computed properties combined with private state variables. This method provides type-safe, readonly access whilst maintaining full control over state mutations through dedicated methods.

### Benefits of Readonly State in Pinia

Creating **readonly state in Pinia** offers several advantages:

- **Data Integrity**: Prevents accidental mutations from components
- **Type Safety**: TypeScript compiler prevents readonly property assignment
- **Debugging**: Easier to trace state changes through controlled methods
- **Architecture**: Enforces proper state management patterns
- **Encapsulation**: Maintains clear boundaries between state access and mutation

## Practical Example: Readonly State for Game Scoring

Consider building a rugby game in Vue where state protection is crucial. Unlike football where scoring increments by 1, rugby's scoring system increases by different amounts: 5 points for a try, 3 points for a penalty, 2 points for a conversion, and 3 points for a drop goal.

We want to protect the score state property by only allowing it to be mutated in specific ways. We can achieve this **Pinia state protection** by creating an exposed computed property that returns the state, without exposing the state property directly.

```ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useRugbyStore = defineStore('rugbyStory', () => {
  // Private state - not exposed to components
  const _score = ref<number>(0);

  // Readonly access via computed property
  const score = computed(() => _score.value);

  // Controlled mutation method for state protection
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

In the example above, `_score` (prefixed with an underscore following the JavaScript convention for private properties) can be read via the `score` computed property, but cannot be mutated directly. Since `score` is a computed property, Vue does not allow its value to be changed. If you try editing the value of `score`, you will get the following TypeScript error: `"Cannot assign to "score" because it is a read-only property."`

**Important caveat:** The private `_score` state will never appear in Pinia's global state or in the Vue DevTools Pinia panel—only the exposed computed property will be visible.

## Alternative Methods for Pinia Readonly State

### Using Vue's readonly() Method

Vue provides a `readonly()` method that can create **readonly state** in Pinia:

```ts
import { defineStore } from 'pinia';
import { ref, readonly } from 'vue';

export const useExampleStore = defineStore('example', () => {
  const _state = ref({ count: 0 });
  const state = readonly(_state);

  function increment() {
    _state.value.count++;
  }

  return { state, increment };
});
```

However, this approach has several limitations compared to the computed property method:

- **Less type-safe**: TypeScript integration isn't as seamless
- **Can be bypassed**: Accessing the original reference circumvents readonly protection
- **Vue DevTools**: May not integrate as clearly with debugging tools
- **Complexity**: Requires managing both readonly and writable references

### Comparison: Computed vs Readonly

<div class="table">

| Approach | Type Safety | DevTools Support | Ease of Use | Bypass Protection |
|----------|-------------|------------------|-------------|-------------------|
| Computed Properties | ✅ Excellent | ✅ Clear | ✅ Simple | ❌ Cannot bypass |
| `readonly()` Method | ⚠️ Good | ⚠️ Complex | ⚠️ Moderate | ⚠️ Can be bypassed |

</div>

## When to Use Readonly State

Consider implementing **Pinia readonly state** in these scenarios:

- **Critical business logic**: Financial calculations, scoring systems, user permissions
- **Shared state**: Data accessed by multiple components that shouldn't be modified directly
- **Complex validation**: State that requires specific validation before changes
- **Audit trails**: When you need to track all state modifications
- **Team development**: Enforcing patterns across large development teams

## Best Practices for Vue Readonly State

1. **Use descriptive naming**: Prefix private state with underscore (`_state`)
2. **Document readonly properties**: Make intentions clear in comments
3. **Provide clear mutation methods**: Name functions descriptively (`incrementScore`, `resetGame`)
4. **Consider performance**: Computed properties are cached and efficient
5. **Test state protection**: Verify readonly behaviour in unit tests

## Conclusion

Creating **readonly state in Pinia** is essential for maintaining data integrity in complex Vue applications. By using computed properties as readonly interfaces to private state variables, you achieve type-safe **Pinia state protection** whilst maintaining the simplicity that makes Pinia appealing.

This approach to **Pinia readonly state** provides the perfect balance between Vuex's strict state protection and Pinia's developer-friendly API, giving you immutable state benefits without sacrificing ease of use. Whether you're building games, financial applications, or any system requiring controlled state mutations, this pattern ensures your Vue store remains predictable and maintainable.