import Vue from 'vue';
import App from './App.vue';
import Router from './router';

Vue.config.productionTip = false;

new Vue({
  router: new Router().instance,
  render: (h) => h(App),
}).$mount('#app');
