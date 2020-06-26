<template>
  <page-template page-title="Hey, I'm Jack Domleo">
    <section class="intro">
      <figure class="polaroid intro__img" tabindex="0">
        <div class="polaroid__img shine">
          <img src="@/assets/img/bio-image-jack-domleo.jpg" alt="Portrait image of Jack Domleo">
        </div>
        <figcaption>
          This is me
        </figcaption>
      </figure>
      <p class="intro__welcome">
        I'm a <strong>front-end developer</strong> from <strong>Nottingham, UK</strong>.
      </p>
      <p class="intro__i-like">
        I like
        <span class="intro__likes">
          <span class="intro__like">front-end</span><span class="intro__like">UI/UX</span><span class="intro__like">tea ☕</span><span class="intro__like">Disney</span><span class="intro__like">to think 🤔</span><span class="intro__like">sunny holidays 🌞</span><span class="intro__like">ice hockey 🏒</span>
        </span>
      </p>
      <p class="intro__occupation">
        <svg-icon name="briefcase" /> <span class="sr-only">Current occupation</span> Developer at
        <a
          href="https://www.mitrefinch.co.uk?ref=jackdomleo.dev"
          rel="nofollow"
          target="_blank"
        >Mitrefinch</a>
      </p>
    </section>
    <hr>
    <section id="what-im-currently-doing">
      <h2>What am I currently doing</h2>
      <ul class="currently">
        <li><div>Furloughed 😷</div></li>
        <li>
          <div>
            🎓 Creating a Udemy course with <a href="https://twitter.com/NehemiahKiv" rel="nofollow noopener" target="_blank">Nehemiah</a> and <a href="https://twitter.com/anniebombanie_" rel="nofollow noopener" target="_blank">Annie</a>!
          </div>
        </li>
        <li><div>📚 Reading <a href="https://www.amazon.com/Responsive-Web-Design-HTML5-CSS/dp/1839211563" rel="nofollow noopener" target="_blank">Responsive Web Design with HTML5 and CSS</a> by <a href="https://benfrain.com" rel="nofollow noopener" target="_blank">Ben Frain</a></div></li>
        <li>
          <div>
            Participating in the <a href="https://github.com/JDomleo/100-days-of-code" rel="nofollow noopener" target="_blank">100 Days of Code</a> challenge 💪
          </div>
        </li>
        <li>
          <div>
            Learning <a href="https://greensock.com/gsap" rel="nofollow noopener" target="_blank">GSAP</a>
          </div>
        </li>
        <li>
          <div>
            Improving my web presence
          </div>
        </li>
      </ul>
    </section>
    <hr>
    <section id="toolbox" class="toolbox">
      <h2>My toolbox of skills</h2>
      <p>A set of tools and technologies I am comfortable with and compotent in:</p>
      <ul class="toolbox__list">
        <li v-for="(tool, index) in toolbox" :key="tool.name" :aria-setsize="toolbox.lenght" :aria-posinset="index + 1">
          <svg-icon :name="tool.icon" />
          <p>{{ tool.name }}</p>
        </li>
      </ul>
    </section>
    <hr>
    <section id="work" class="work">
      <h2>Work</h2>
      <p>
        A brief history of my employment. More details can be found on my
        <a
          href="https://www.linkedin.com/in/jack-domleo"
          rel="nofollow"
        >LinkedIn profile</a>.
      </p>
      <ul>
        <li
          v-for="(work, index) in workHistory"
          :key="work.company + '-' + work.title"
          :aria-setsize="workHistory.length"
          :aria-posinset="index + 1"
        >
          <div class="work__bullet" />
          <div class="work__time">
            <span class="sr-only">Employment dates:</span>
            <time :datetime="getDate(work.start).datetime">{{
              getDate(work.start).date
            }}</time>
            <span aria-label="to">-</span>
            <time
              :datetime="
                work.end === 'present'
                  ? getDate(new Date()).datetime
                  : getDate(work.end).datetime
              "
            >{{
               work.end === "present" ? "present" : getDate(work.end).date
             }}
              <span
                v-if="work.end === 'present'"
                class="sr-only"
              >day</span></time>
          </div>
          <div class="work__details">
            <h3><span class="sr-only">Company name</span>{{ work.company }}</h3>
            <p><span class="sr-only">Job title</span>{{ work.title }}</p>
            <p>{{ work.description }}</p>
          </div>
        </li>
      </ul>
    </section>
    <hr>
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>
        You can find my official portfolio <nuxt-link to="/portfolio">
          here
        </nuxt-link>
      </p>
    </section>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { PageTemplate } from '@/components';

interface IWork {
  start: Date;
  end: Date | 'present';
  company: string;
  title: string;
  description: string;
}

interface ITool {
  name: string;
  icon: string;

}

interface IStartEndDate {
  datetime: string;
  date: string;
}

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Home'
    };
  }
})
export default class Index extends Vue {
  private readonly workHistory: IWork[] = [
    {
      start: new Date('2019-05-15'),
      end: 'present',
      company: 'Mitrefinch',
      title: 'Developer',
      description:
        'Creating multitennant SaaS applications such as payroll and access control using Vue.js and TypeScript'
    },
    {
      start: new Date('2019-03-25'),
      end: new Date('2019-05-15'),
      company: 'Mitrefinch',
      title: 'Junior Developer',
      description:
        'Created a centralised repository of consistent styles using SCSS, BEM and PostCSS to consume in new products'
    },
    {
      start: new Date('2018-09-03'),
      end: new Date('2019-02-18'),
      company: 'flybmi',
      title: 'IT/Developer Apprentice',
      description:
        'Used the Grav CMS to maintain the airline\'s website and React.js to maintain the airline\'s intranet'
    },
    {
      start: new Date('2017-06-17'),
      end: new Date('2018-08-31'),
      company: 'Primark',
      title: 'Retail Assistant',
      description:
        'Worked part-time for this fast-paced Nottingham high street store during my time in Sixth Form trying to balance my work hours, study hours and personal life'
    },
    {
      start: new Date('2016-07-13'),
      end: new Date('2016-08-31'),
      company: 'JND Accounting',
      title: 'Office Assistant',
      description:
        'Worked part-time for this accounting company after finishing secondary school, making tea and coffee, filing, shredding and tidying up'
    }
  ];

  private readonly toolbox: ITool[] = [
    {
      name: 'HTML5',
      icon: 'html'
    },
    {
      name: 'CSS',
      icon: 'css'
    },
    {
      name: 'JavaScript',
      icon: 'js'
    },
    {
      name: 'jQuery',
      icon: 'jquery'
    },
    {
      name: 'Vue.js',
      icon: 'vuejs'
    },
    {
      name: 'Nuxt.js',
      icon: 'nuxt'
    },
    {
      name: 'Sass/SCSS',
      icon: 'sass'
    },
    {
      name: 'Responsive Design',
      icon: 'rwd'
    },
    {
      name: 'TypeScript',
      icon: 'typescript'
    },
    {
      name: 'Git',
      icon: 'git'
    }
  ]

  private getDate (date: Date): IStartEndDate {
    return {
      datetime: format(date, 'yyyy-MM-dd'),
      date: format(date, 'MMM yyyy')
    };
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 2rem 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type{
    margin-bottom: 0;
  }
}

.polaroid {
  width: 180px;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, #fff, #ddd 60%);
  box-shadow: 2px -2px 20px 0px rgba(0, 0, 0, 0.6),
    inset 4px 5px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 1rem 0.5rem 0 0.5rem;;
  transform: rotate(5deg);
  transform-origin: top;
  transition: all 0.5s ease;
  color: var(--color-grey-dark);

  &:hover,
  &:focus {
    transform: rotate(-5deg);
    box-shadow: 2px -2px 20px 0px rgba(0, 0, 0, 0.6),
      inset 4px 5px 10px 0 rgba(0, 0, 0, 0.1) !important;

    @media screen and (prefers-reduced-motion: reduce) {
      transform: rotate(5deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    transform: translateY(-50%);
    height: 0.5rem;
    width: 0.5rem;
    background: radial-gradient(var(--color-blue), var(--color-blue-dark));
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  }

  &__img {
    width: 100%;
    height: 80%;
    background-color: #000;
    overflow: hidden;
    user-select: none;

    img {
      animation: polaroid 3.5s ease;
      width: 100%;

      @media screen and (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }

    &.shine {
      position: sticky;
    }
  }

  figcaption {
    font-family: "Rock Salt", sans-serif;
    letter-spacing: 0.1em;
    font-size: 1rem;
    display: flex;
    align-items: center;
    flex: 1;
  }

  @keyframes polaroid {
  0% {
    filter: opacity(0);
  }
  100% {
    filter: opacity(100%);
  }
}
}

.intro {
  display: grid;
  grid-template-areas: "img" "welcome" "likes" "occupation";
  place-items: center;
  text-align: center;
  gap: 0.5rem;

  &__img {
    grid-area: img;

    @media screen and (min-width: 40em) {
      grid-row: 1/3;
    }
  }

  &__welcome {
    grid-area: welcome;
    font-size: 1rem;
    line-height: 1.2rem;

    @media screen and (min-width: 30em) {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  &__i-like {
    font-size: 140%;
    margin-right: 4rem;
  }

  &__likes {
    grid-area: likes;
    margin-left: 0.5rem;
  }

  &__like {
    animation: like 28s infinite ease forwards;
    opacity: 0;
    position: absolute;

    @for $i from 2 through 8 {
      &:nth-child(#{$i}) {
        animation-delay: calc((#{$i} - 1) * 4s);
      }
    }
  }

  &__occupation {
    grid-area: occupation;
    font-size: 1.2rem;
    line-height: 1.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }

    @media screen and (min-width: 30em) {
      font-size: 1.4rem;
      line-height: 1.6rem;

      svg {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  }

  @media screen and (min-width: 40em) {
    grid-template-areas: "welcome img" "likes ." "occupation .";
    place-items: initial;
    text-align: left;
  }
}

@keyframes like {
  0%, 15% {
    opacity: 0;
  }
  2.5%, 12.5% {
    opacity: 1;
  }
}

.currently {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 28.125em) {
    grid-template-columns: 1fr 1fr;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid var(--color-grey-light);
  }
}

.toolbox {
  &__list {
    padding-left: 0;
    list-style-type: none;
    margin: 1.5rem 0;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 26.25em) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 33.75em) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 43.75em) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 1rem 0;
      text-align: center;

      svg {
        height: 4rem;
        width: 4rem;
      }
    }
  }
}

.work {
  margin-top: 3rem;

  ul {
    padding: 1rem 0 0 0;
    margin: 0;
    list-style: none;
    position: relative;

    &::before {
      content: " ";
      height: 100%;
      width: 1px;
      background: linear-gradient(
        50deg,
        var(--color-orange-deep) 0%,
        var(--color-blue) 100%
      );
      position: absolute;
      top: 0;
      left: 0.5em;
      z-index: -1;
    }

    li {
      display: flex;
      align-items: baseline;
    }
  }

  &__bullet {
    height: 1rem;
    width: 1rem;
    background-color: currentColor;
    border-radius: 50%;
  }

  &__time {
    width: 5rem;
    margin: 0 0.5rem 0 1.5rem;

    @media screen and (min-width: 30em) {
      margin-right: 2.5rem;
    }
  }

  &__details {
    flex: 1;

    h3,
    h3 + p {
      text-transform: uppercase;
    }

    h3 {
      margin-bottom: 0;

      + p {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
