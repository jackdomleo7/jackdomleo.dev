<template>
  <figure class="project">
    <img v-if="image" :src="image" :alt="imageAlt" :title="imageAlt">
    <div class="project__content">
      <h3>{{ header }}{{ organisation ? ` - ${organisation}` : '' }}</h3>
      <p>{{ description }}</p>
      <slot />
    </div>
    <div v-if="tech" class="project__tech">
      <h4>Main tech{{ organisation ? ' I used' : '' }}:</h4>
      <ul>
        <li v-for="techItem in tech" :key="techItem" :aria-label="techItem.name" data-cooltipz-dir="top" tabindex="0">
          <svg-icon :name="techItem.icon" />
        </li>
      </ul>
    </div>
    <btn v-if="url" :href="url">
      {{ button }}
    </btn>
  </figure>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import ITech from './portfolio/IProject';
import { Btn } from '@/components';

@Component({
  components: { Btn }
})
export default class ProjectCard extends Vue {
  @Prop({ type: String })
  private readonly header!: string;

  @Prop({ type: String })
  private readonly description!: string;

  @Prop({ type: String })
  private readonly image!: string;

  @Prop({ type: String })
  private readonly imageAlt!: string;

  @Prop({ type: Array })
  private readonly tech!: ITech[];

  @Prop({ type: String })
  private readonly url!: string;

  @Prop({ type: String, default: 'View' })
  private readonly button!: string;

  @Prop({ type: String })
  private readonly organisation!: string;
}
</script>

<style lang="scss" scoped>
.project {
  background: var(--body-background);
  border: 1px solid var(--color-grey);
  align-self: flex-start;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  overflow: hidden;

  &__content {
    margin: 1rem;
    flex: 1;

    h3 {
      font-size: 1.2rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  &__tech {
    margin: 0 1rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding-left: 0;
      margin-top: 0.5rem;
      gap: 0.5rem;

      svg {
        height: 1.6rem;
        width: 1.6rem;
      }
    }
  }

  .btn {
    margin: 1.5rem 1rem 0 1rem;
    align-self: flex-start;
  }
}
</style>
