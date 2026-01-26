<template>
  <div class="work">
    <header class="container">
      <h1 class="work__title">Work</h1>
      <p class="work__description">In my {{ variables.NO_OF_YEARS_EXPERIENCE }} years of experience, I have engineered frontend solutions across the travel, HCM software, and finance sectors. My focus has evolved from executing features to architecting resilient systems and leading technical standards.</p>
    </header>
    <div class="container">
      <ol class="work__places">
        <li class="place">
          <div class="place__details">
            <img src="/work/ocean-finance-logo.webp" alt="Ocean Finance" height="80" width="80" class="place__logo" loading="eager" fetchpriority="high" />
            <h2 class="place__name">Ocean Finance</h2>
            <p class="place__duration">February 2021 - present</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">Senior Frontend Developer</h3>
              <p class="role__dates">June 2023 - present</p>
              <div class="rich-text">
                <p>I was promoted to lead the frontend strategy for our Credit Card product - the business's highest-revenue vertical. Beyond my primary product, I spend a lot of my time on cross-product collaboration, ensuring our technical standards and shared systems are consistent across the entire engineering team.</p>

                <h4>Key responsibilities:</h4>
                <ul>
                  <li><strong>Leading the Stack:</strong> Managing the transition from legacy Vue 2 and JavaScript to a modern, type-safe Vue 3 and TypeScript ecosystem.</li>
                  <li><strong>Planning & Feasibility:</strong> Acting as a technical spokesperson during project planning to help teams estimate work and define realistic roadmaps.</li>
                  <li><strong>Feature Engineering:</strong> Architecting and delivering complex user features primarily for the Credit Card journey (but also other products), ensuring they are performant, accessible, and align with business requirements.</li>
                  <li><strong>Cross-Product Collaboration:</strong> Working across different product teams to implement shared standards and improve our overall frontend architecture.</li>
                  <li><strong>Quality & Stability:</strong> Driving strategic refactoring to keep our systems maintainable and writing the automated tests that protect our most important customer journeys.</li>
                  <li><strong>AI Workflow Integration:</strong> Utilizing AI-assisted development tools (since early 2025) to accelerate feature delivery, automate boilerplate, and perform deep code analysis for architectural improvements.</li>
                </ul>

                <h4>Key achievements:</h4>
                <ul>
                  <li><strong>Revenue Impact:</strong> Vue 3 upgrade delivered a <strong>50% increase in web performance</strong>, which resulted in a significant and measurable uplift in monthly revenue.</li>
                  <li><strong>Accessibility Leadership:</strong> Performed deep audits, architectural updates, and training to bring our product quality up to WCAG 2.2 AA standards, ensuring our financial tools are usable by everyone.</li>
                  <li><strong>Systems Engineering:</strong> Re-engineered our internal npm packages with code-splitting, achieving an <strong>80% performance boost</strong> for the utilities used across the whole business.</li>
                  <li><strong>Better Tooling:</strong> Co-led the move to Vite and Vitest, which gave the entire engineering department a significantly faster and more reliable feedback loop.</li>
                  <li><strong>Workflow Innovation:</strong> Established internal best practices for using AI in the frontend workflow, leading to faster prototyping and more robust unit test coverage.</li>
                </ul>

                <h4>Key technologies:</h4>
                <p>Vue.js, Nuxt.js, TypeScript, SCSS, Vite, Vitest, Storybook, PlayWright, Git, AI-assisted workflows</p>
              </div>
            </li>
            <li class="role">
              <h3 class="role__name">Frontend Developer</h3>
              <p class="role__dates">February 2021 - June 2023</p>
              <div class="rich-text">
                <p>I joined the team to help build out new features across our financial products while helping to push our frontend architecture in a more modern direction.</p>

                <h4>Key responsibilities:</h4>
                <ul>
                  <li><strong>Product Ownership:</strong> Led the frontend development for the Secured Loans product while assisting on other areas of the site.</li>
                  <li><strong>Component Maintenance:</strong> Maintained our in-house Vue.js component library to ensure we stayed consistent with design specifications.</li>
                  <li><strong>A/B Testing:</strong> Developed and monitored A/B tests to optimize user journeys, hardcoding the winners and cleaning up the experiments afterward.</li>
                </ul>

                <h4>Key achievements:</h4>
                <ul>
                  <li><strong>The "Global Variables" Solution:</strong> I architected a centralized system to manage sensitive financial data (like APRs) from one place. This eliminated manual errors and made site-wide updates much safer and easier across the code and CMS.</li>
                  <li><strong>Shared Infrastructure:</strong> Co-created our internal npm packages for shared utilities, analytics, and assets, which standardized how we build across different projects.</li>
                  <li><strong>Building Trust:</strong> Integrated Jest and Storybook into our component library, ensuring we could ship updates without accidental breaking changes.</li>
                  <li><strong>Stabilizing Products:</strong> Directed the migration of the Secured Loans product to TypeScript, which led to a clear reduction in frontend bugs.</li>
                </ul>

                <h4>Key technologies:</h4>
                <p>Vue.js, Nuxt.js, TypeScript, SCSS, Jest, Storybook, Git</p>
              </div>
            </li>
          </ol>
        </li>
        <li class="place">
          <div class="place__details">
            <img src="/work/mitrefinch-logo.webp" alt="Mitrefinch" height="80" width="80" class="place__logo" loading="lazy" fetchpriority="low" />
            <h2 class="place__name">Mitrefinch</h2>
            <p class="place__duration">March 2019 - February 2021</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">Developer</h3>
              <p class="role__dates">June 2019 - February 2021</p>
              <div class="rich-text">
                <p>Following a successful period as a Junior, I was promoted to a mid-level role to support the development of Mitrefinch's next-generation web products. I worked within a cross-functional team to modernize the business's core payroll and security access control offerings.</p>

                <h4>Key responsibilities:</h4>
                <ul>
                  <li><strong>Product Modernization:</strong> Delivering frontend features for the web-based versions of Flexipay (payroll) and security access control software.</li>
                  <li><strong>System Maintenance:</strong> Managing and updating the centralized SCSS component library to ensure consistency across new product lines.</li>
                  <li><strong>Quality Assurance:</strong> Ensuring codebase reliability through thorough unit testing and participating in code reviews.</li>
                  <li><strong>Technical Influence:</strong> Contributing to frontend, UI/UX, and accessibility decisions to improve the overall end-user experience.</li>
                  <li><strong>Full-Stack Growth:</strong> Expanding my skillset into backend development (C#) and automated regression testing using Selenium.</li>
                </ul>

                <h4>Key achievements:</h4>
                <ul>
                  <li><strong>System Ownership:</strong> Took full ownership of the centralized SCSS component library. I ensured it remained scalable and aligned with evolving design requirements, making it a critical resource for developers across the business.</li>
                </ul>

                <h4>Key technologies:</h4>
                <p>Vue.js, TypeScript, Jest, SCSS, HTML, Git</p>
              </div>
            </li>
            <li class="role">
              <h3 class="role__name">Junior Developer</h3>
              <p class="role__dates">March 2019 - June 2019</p>
              <div class="rich-text">
                <p>After flybmi filed for administration, I transitioned to Mitrefinch, a specialist in HCM (Human Capital Management) software. This role was pivotal for my professional development, providing a supportive environment to deepen my understanding of commercial web development.</p>

                <h4>Key responsibilities:</h4>
                <ul>
                  <li><strong>Technical Mentorship:</strong> Shadowing senior developers to learn best practices in architecting scalable frontend solutions.</li>
                  <li><strong>Agile Collaboration:</strong> Gaining practical experience within the Scrum framework and understanding the dynamics of high-performing agile teams.</li>
                </ul>

                <h4>Key achievements:</h4>
                <ul>
                  <li><strong>UI Foundation:</strong> Led the initial creation of an in-house centralized SCSS component library. I focused on making the system scalable, easy to use, and compliant with modern UX and accessibility standards.</li>
                  <li><strong>Product Contribution:</strong> Aided in the early-stage development of the new era of Mitrefinch web products.</li>
                </ul>

                <h4>Key technologies:</h4>
                <p>SCSS, HTML, JavaScript, Git</p>
              </div>
            </li>
          </ol>
        </li>
        <li class="place">
          <div class="place__details">
            <img src="/work/flybmi-logo.webp" alt="flybmi" height="80" width="80" class="place__logo" loading="lazy" fetchpriority="low" />
            <h2 class="place__name">flybmi</h2>
            <p class="place__duration">September 2018 - February 2019</p>
          </div>
          <ol class="place__roles">
            <li class="role">
              <h3 class="role__name">IT/Developer Apprentice</h3>
              <p class="role__dates">September 2018 - February 2019</p>
              <div class="rich-text">
                <p>I started this apprenticeship fresh out of sixth form as the first step in my software development career. It was a fast-paced introduction to the industry, offering unique insights into the travel sector and commercial web systems. Although the business unfortunately filed for administration in early 2019, the experience was pivotal in building my technical foundation.</p>

                <h4>Key responsibilities:</h4>
                <ul>
                  <li><strong>Site Maintenance:</strong> Assisting in the daily upkeep of a high-traffic, multilingual commercial website, focusing on SEO, accessibility, and Core Web Vitals.</li>
                  <li><strong>Internal Infrastructure:</strong> Maintaining the company intranet used for critical operations, including flight crew schedules and ground crew reporting.</li>
                  <li><strong>Digital Marketing:</strong> Building and deploying responsive marketing emails via Mailchimp to support airline campaigns.</li>
                  <li><strong>Technical Learning:</strong> Balancing production-level code changes with apprenticeship coursework and mentorship from senior developers.</li>
                </ul>

                <h4>Key achievements:</h4>
                <ul>
                  <li><strong>Operational Continuity:</strong> Successfully managed site-wide updates and intranet stability for a distributed workforce of pilots, engineers, and ground crew.</li>
                  <li><strong>Commercial Impact:</strong> Delivered time-sensitive marketing templates that reached a global customer base, ensuring brand consistency across email and web.</li>
                </ul>

                <h4>Key technologies:</h4>
                <p>React JS, Grav CMS, HTML, CSS, Bootstrap, JavaScript, jQuery, Git</p>
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
    margin: 0 0 0.5rem 0;
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
    margin-top: 2rem;
  }

  ul { // This is needed to make it seem like these are top-level lists because of the lists for each role
    list-style-type: disc;
  }
}
</style>