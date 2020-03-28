import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
