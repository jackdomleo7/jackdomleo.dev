<template>
  <section id="work" class="work">
    <h2>Work</h2>
    <p>
      A brief history of my employment. More details can be found on my
      <a
        href="https://www.linkedin.com/in/jack-domleo"
        rel="nofollow"
      >LinkedIn profile</a>.
    </p>
    <ul class="work__list" :class="!showAllWork ? 'work__list--collapsed' : ''">
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
    <btn @click="showAllWork = !showAllWork">
      Show {{ showAllWork ? 'less' : 'all' }} <span class="sr-only">work history</span>
    </btn>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { Btn } from '@/components';

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
  components: { Btn }
})
export default class Work extends Vue {
  private showAllWork: boolean = false;

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
.work {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  &__list {
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
        var(--color-orange) 0%,
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

    &--collapsed {
      max-height: 28rem;
      overflow-y: hidden;
    }

    ~ .btn {
      align-self: center;
      margin-top: 1.5rem;
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
