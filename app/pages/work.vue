<template>
  <div class="work">
    <header class="container">
      <h1 class="work__title">Work</h1>
      <p class="work__description">In my {{ variables.NO_OF_YEARS_EXPERIENCE }} years of experience as a web developer, I have worked in the travel, HCM software, and finance industries. During this time I have experienced many different projects and tech stacks.</p>
    </header>
    <div class="container">
      <ol class="work__places">
        <li class="place">
          <div class="place__details">
            <img src="/work/ocean-finance-logo.png" alt="Ocean Finance" height="80" width="80" class="place__logo" />
            <h2 class="place__name">Ocean Finance</h2>
            <p class="place__duration">February 2021 - present</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">Senior Frontend Developer</h3>
              <p class="role__dates">June 2023 - present</p>
              <div class="rich-text">
                <p>I was promoted to a Senior Frontend Developer in the summer of 2023 shortly after transitioning from leading the frontend of the Secured Loans product to leading the frontend of the Credit Card product - a product that holds more responsibility due to the larger number of customers and revenue.</p>
                <h4>Key responsibilities:</h4>
                <ul>
                  <li>Lead the frontend development of the Credit Card product, while assisting other products.</li>
                  <li>Migrate the Credit Card project from Vue 2 and JavaScript to Vue 3 and TypeScript, with a big focus on web performance and DX (developer experience).</li>
                  <li>Collaborate in the planning, feasibility, and estimates of upcoming projects as a spokesperson for frontend development.</li>
                  <li>Improve the overall quality of frontend architecture and codebases across the business, focusing on quality, reliability, performance, productivity, and developer experience.</li>
                  <li>Suggest, develop and monitor A/B tests, hardcoding the winning variant, and cleaning up any losing variants.</li>
                  <li>Write and maintain automated end-to-end tests for the Credit Card product.</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Successfully migrated the Credit Card project to Vue 3 and TypeScript, and improved web performance by 50% resulting in a significant monthly revenue uplift.</li>
                  <li>Improved developer experience across the board by co-leading the replacement of Webpack to Vite, the replacement of Jest to Vitest, and the remaining JavaScript to TypeScript.</li>
                  <li>Continuously improved the internally hosted @ocean npm packages. Implemented code-splitting to separate utilities which resulted in up to 80% performance improvement on the affected packages.</li>
                  <li>Created business-wide web accessibility guidelines for developers and designers, and performed audits to ensure we maintain high-quality accessibility.</li>
                </ul>
                <h4>Key technologies:</h4>
                <p>Vue JS, Nuxt JS, TypeScript, SCSS, Vite, Vitest, Storybook, PlayWright, git</p>
              </div>
            </li>
            <li class="role">
              <h3 class="role__name">Frontend Developer</h3>
              <p class="role__dates">February 2021 - June 2023</p>
              <div class="rich-text">
                <p>I joined the Ocean Finance frontend development team in early 2021. The business was ready to bring on a new developer to add to their team to aid in the development of new features across all of their financial products, as well as assist in driving the frontend architecture in an upward direction.</p>
                <h4>Key responsibilities:</h4>
                <ul>
                  <li>Lead the frontend development of the Secured Loans product, while assisting other products.</li>
                  <li>Collaborate in the planning, feasibility, and estimates of upcoming projects as a spokesperson for frontend development.</li>
                  <li>Maintain the in-house Vue JS component library in accordance with design specifications.</li>
                  <li>Develop and monitor A/B tests, hardcoding the winning variant, and cleaning up any losing variants.</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Improved quality of the in-house Vue JS component library by implementing Jest for unit testing, and Storybook for documentation. This ensured new versions of the component library were not published with unintentional breaking changes, building confidence and trust amongst developers.</li>
                  <li>Improved quality of the Secured Loans product by migrating from JavaScript to TypeScript, resulting in fewer frontend-related bugs being raised.</li>
                  <li>Co-created the @ocean internally-hosted npm packages for the component library, common TypeScript utilities, a centralised place for fonts and icons, analytics, and logging.</li>
                  <li>Solved a business-wide issue where making site-wide APR updates across multiple projects and the CMS was time-consuming and often resulted in risk. I architected a solution - "Global Variables" - that meant APR figures and similar figures alike were stored, maintained, and updated from one single place. This resulted in quicker APR figure changes with fewer mistakes.</li>
                </ul>
                <h4>Key technologies:</h4>
                <p>Vue JS, Nuxt JS, TypeScript, SCSS, Jest, Storybook, git</p>
              </div>
            </li>
          </ol>
        </li>
        <li class="place">
          <div class="place__details">
            <img src="/work/mitrefinch-logo.jpg" alt="Mitrefinch" height="80" width="80" class="place__logo" />
            <h2 class="place__name">Mitrefinch</h2>
            <p class="place__duration">March 2019 - February 2021</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">Developer</h3>
              <p class="role__dates">June 2019 - February 2021</p>
              <div class="rich-text">
                <p>It was around this time Mitrefinch was ready to begin creating new teams for a new era of products. After proving myself as a junior developer in the previous months, I was promoted to a mid-level developer and placed in a team alongside other mid-level and senior developers.</p>
                <h4>Key responsibilities:</h4>
                <ul>
                  <li>Aid in the development of a new era of Mitrefinch products. - a web version of the currently existing Flexipay payroll software, and a new web-based security access control software.</li>
                  <li>Maintain and update the centralised SCSS component library.</li>
                  <li>Ensure quality through thorough unit testing.</li>
                  <li>Influence frontend, UI/UX, and accessibility decisions.</li>
                  <li>Upskill in other areas of software development such as backend development (C#) and automation testing (Selenium).</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Took ownership of the maintenance and upkeep of the centralised SCSS component library ensuring it kept up-to-date with the dynamic business, software, and design requirements. This library proved to be very useful to the products and to the developers using it.</li>
                </ul>
                <h4>Key technologies:</h4>
                <p>Vue JS, TypeScript, Jest, SCSS, HTML, git</p>
              </div>
            </li>
            <li class="role">
              <h3 class="role__name">Junior Developer</h3>
              <p class="role__dates">March 2019 - June 2019</p>
              <div class="rich-text">
                <p>After being made redundant from flybmi filing for administration, I quickly landed a Junior Developer role at a local software house specialising in HCM (Human Capital Management) software. I gained a lot of knowledge and understanding of web development in this role and had lots of support and mentoring during my personal and professional development.</p>
                <h4>Key responsibilities:</h4>
                <ul>
                  <li>Shadow and learn from other developers.</li>
                  <li>Understand scrum agile development and the different roles of a scrum team.</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Aid in the development of a new era of Mitrefinch products.</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Led the creation and development of a new in-house centralised SCSS component library that was easy to use, followed UX and accessibility standards, and was scalable.</li>
                </ul>
                <h4>Key technologies:</h4>
                <p>SCSS, HTML, JavaScript, git</p>
              </div>
            </li>
          </ol>
        </li>
        <li class="place">
          <div class="place__details">
            <img src="/work/flybmi-logo.png" alt="flybmi" height="80" width="80" class="place__logo" />
            <h2 class="place__name">flybmi</h2>
            <p class="place__duration">September 2018 - February 2019</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">IT/Developer Apprentice</h3>
              <p class="role__dates">September 2018 - February 2019</p>
              <div class="rich-text">
                <p>This role was an apprenticeship I started fresh out of sixth form after completing my A-Levels. It was my first role in my career as a software developer. In my short time occupying this role, I learned so much about the world of web development. This was an exciting role that also gave me some insights into the travel industry. Despite never finishing the apprenticeship due to the business filing for administration in February 2019, I am grateful for the opportunity.</p>
                <h4>Key responsibilities:</h4>
                <ul>
                  <li>Shadow and learn from other web developers while progressing with my apprenticeship coursework and study modules.</li>
                  <li>Maintain and update the multilingual website, ensuring good organic SEO, good accessibility standards, and optimal core web vitals performance.</li>
                  <li>Maintain the company intranet that was used for pilot/flight attendant schedules, engineering/ground crew reports, business updates and more.</li>
                </ul>
                <h4>Key achievements:</h4>
                <ul>
                  <li>Template and send marketing emails via Mailchimp.</li>
                </ul>
                <h4>Key technologies:</h4>
                <p>React JS, Grav CMS, HTML, CSS, Bootstrap, JavaScript, jQuery, git</p>
              </div>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import variables from '@/utilities/variables'

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Work'
})

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/work` }
  ]
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/rich-text' as *;

.work {
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
  
    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__description {
    font-size: var(--text-body);
  }

  &__places {
    list-style-type: none;
    padding: 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
}

.place {
  --logo-size: 2.5rem;
  --logo-gap: 0.5rem;
  padding: 1rem 0;

  @media (min-width: $responsive-standard-tablet) {
    --logo-size: 5rem;
    --logo-gap: 2rem;
  }
  
  &__details {
    display: grid;
    grid-template-areas: 'logo name' 'logo duration';
    grid-template-columns: var(--logo-size) 1fr;
    gap: 0 var(--logo-gap);
  }

  &__logo {
    grid-area: logo;
    height: var(--logo-size);
    width: var(--logo-size);
    border-radius: var(--border-radius-standard);
    overflow: hidden;
  }

  &__name {
    grid-area: name;
    margin: 0;
    font-size: var(--text-subtitle);
  }

  &__duration {
    grid-area: duration;
    margin: 0;
    font-size: var(--text-small);
  }

  &__roles {
    list-style-type: disclosure-closed;
    padding-left: calc(var(--logo-size) + var(--logo-gap));
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
}

.role {
  padding: 0;

  &__name {
    margin: 0;
    font-size: var(--text-heading);
  }

  &__dates {
    margin: 0;
    font-size: var(--text-small);
  }
}

:deep() .rich-text {
  // Overrides
  h4 {
    margin-top: 1.5rem;
  }

  ul { // This is needed to make it seem like these are top-level lists because of the lists for each role
    list-style-type: disc;
  }
}
</style>