import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue';
import router from './router';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.use(VueRouter)

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#navbar',
    render: r => r(App),
    router,
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