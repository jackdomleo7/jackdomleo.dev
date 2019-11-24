<template>
  <div class="projects">
    <h1 class="page--title">Projects</h1>
    <article class="projects__article">
      <h2>ellaparsons.design</h2>
      <ul>
        <li>
          <strong>Description:</strong> Portfolio website for Ella Parsons
        </li>
      </ul>
    </article>
    <article class="projects__article">
      <h2>Flexipay</h2>
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
      <h2>Kernel</h2>
      <ul>
        <li>
          <strong>Company:</strong> Mitrefinch Ltd
        </li>
        <li>
          <strong>Description:</strong> Central repository of styles and Vue components to be used across all Mitrefinch web products
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
      <h2>jackdomleo.dev</h2>
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

@Component
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
  &__article {
    margin: 3.5rem 0;
  }
}
</style>
