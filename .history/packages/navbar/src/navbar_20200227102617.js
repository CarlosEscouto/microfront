import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const router = new VueRouter({})

const vueLifecycles = singleSpaVue({
  Vue,
  router,
  appOptions: {
    el: '#navbar',
    render: r => r(App)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];