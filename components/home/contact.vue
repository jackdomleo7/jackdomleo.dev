<template>
  <section id="contact">
    <h2>Contact me</h2>
    <form
      action="https://formspree.io/xzbjajvj"
      method="POST"
      class="contact__form"
    >
      <textfield class="contact__name" label="Name" placeholder="Dev Eloper" name="Name" />
      <textfield class="contact__email" label="Email" placeholder="dev.eloper@hey.com" name="Email" />
      <textfield class="contact__message" multiline label="Message" placeholder="Hi Jack! I'm contacting you today to say..." name="Message" />

      <btn class="contact__btn" type="submit" show-icon-on-hover>
        Send <svg-icon name="send" />
      </btn>
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Btn, Textfield } from '@/components';

@Component({
  components: { Btn, Textfield }
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
.contact {
  &__form {
    display: grid;
    grid-template-areas: 'name' 'email' 'message' 'btn';
    gap: 1rem;

    @media (min-width: 30em) {
      grid-template-areas: 'name email' 'message message' 'btn btn';
    }
  }

  &__email {
    grid-area: email;
  }

  &__name {
    grid-area: name;
  }

  &__message {
    grid-area: message;
  }

  &__btn {
    grid-area: btn;
    justify-self: right;
  }
}
</style>
