<template>
  <div class="projects">
    <h1 class="page--title">Projects</h1>
    <article class="projects__article">
      <h2><site-link type="external" link="https://cooltipz.jackdomleo.dev?ref=jackdomleo.dev">Cooltipz.css</site-link></h2>
      <ul>
        <li>
          <strong>Description:</strong> <site-link type="external" link="https://www.npmjs.com/package/cooltipz-css?ref=jackdomleo.dev">npm package</site-link> of cool tooltips made from pure CSS
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2><site-link type="external" link="https://www.tmdip.co.uk?ref=jackdomleo.dev">www.tmdip.co.uk</site-link></h2>
      <ul>
        <li>
          <strong>Description:</strong> Website for TMD Interior Projects &amp; Building Services Ltd
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2><site-link type="external" link="https://ellaparsons.design?ref=jackdomleo.dev">ellaparsons.design</site-link></h2>
      <ul>
        <li>
          <strong>Description:</strong> Portfolio website for Ella Parsons
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2><site-link type="external" link="https://www.mitrefinch.co.uk/product/payroll-software?ref=jackdomleo.dev">Flexipay</site-link></h2>
      <ul>
        <li>
          <strong>Company:</strong> Mitrefinch Ltd
        </li>
        <li>
          <strong>Description:</strong> Payroll web application
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2><i>New Product</i></h2>
      <ul>
        <li>
          <strong>Company:</strong> Mitrefinch Ltd
        </li>
        <li>
          <strong>Release date:</strong> <i>To be confirmed</i>
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2>bmi Connect</h2>
      <ul>
        <li>
          <strong>Company:</strong> flybmi
        </li>
        <li>
          <strong>Description:</strong> Intranet for flybmi employees
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2>www.flybmi.com</h2>
      <ul>
        <li>
          <strong>Company:</strong> flybmi
        </li>
        <li>
          <strong>Description:</strong> Multilingual website for flybmi
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2><site-link type="internal" link="/">jackdomleo.dev</site-link></h2>
      <ul>
        <li>
          <strong>Description:</strong> My own portfolio website
        </li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SiteLink } from '@/components';

@Component({
  components: { SiteLink },
})
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
  &__article {
    margin: 3.5rem 0;
  }
}
</style>
