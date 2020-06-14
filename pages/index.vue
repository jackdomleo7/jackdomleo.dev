<template>
  <page-template page-title="Hey, I'm Jack Domleo">
    <div class="intro">
      <figure class="polaroid intro__img" tabindex="0">
        <div class="polaroid__img shine">
          <img src="@/assets/img/bio-image-jack-domleo.jpg" alt="Portrait image of Jack Domleo">
        </div>
        <figcaption>
          This is me
        </figcaption>
      </figure>
      <p class="intro__welcome">
        I'm a <strong>front-end developer</strong> from <strong>Nottingham, UK</strong>.<br><br>I like front-end develpment, UI/UX, tea, Disney, hockey, holidays (preferably sunny) and stuff that looks cool.
      </p>
      <p class="intro__occupation">
        <svg-icon name="briefcase" /> <span class="sr-only">Current occupation</span> Developer at
        <a
          href="https://www.mitrefinch.co.uk?ref=jackdomleo.dev"
          rel="nofollow"
          target="_blank"
        >Mitrefinch</a>
      </p>
    </div>
    <section class="work">
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
          :key="index"
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

  private getDate (date: Date): IStartEndDate {
    return {
      datetime: format(date, 'yyyy-MM-dd'),
      date: format(date, 'MMM yyyy')
    };
  }
}
</script>

<style lang="scss" scoped>
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
  grid-template-areas: "img" "welcome" "occupation";
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
    grid-template-areas: "welcome img" "occupation .";
    place-items: initial;
    text-align: left;
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
