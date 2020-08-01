<template>
  <section id="signup" class="signup">
    <h2>
      Signup to my monthly <nuxt-link to="/newsletter">
        newsletter
      </nuxt-link>
    </h2>
    <form
      id="mc-embedded-subscribe-form"
      action="https://dev.us10.list-manage.com/subscribe/post?u=5db0c80170083cdaab0b17f84&amp;id=2f05546818"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      novalidate
    >
      <textfield
        input-id="mce-EMAIL"
        type="email"
        name="EMAIL"
        label="Subscribe"
        placeholder="Email address"
        required
      />
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_5db0c80170083cdaab0b17f84_2f05546818" tabindex="-1" value="">
      </div>
      <btn id="mc-embedded-subscribe" input type="submit" value="Subscribe" name="subscribe" />
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Btn from '@/components/btn.vue';
import Textfield from '@/components/formfields/textfield.vue';

@Component({
  components: { Btn, Textfield }
})
export default class Subscribe extends Vue {}
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  > h2 {
    align-self: flex-start;
  }

  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .btn {
      align-self: flex-end;
    }
  }
}
</style>
