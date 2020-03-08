import Vue from 'vue';
import store from './vuex';
import App from './App.vue'
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#posts',
    render: r => r(App),
    router,
    store,
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