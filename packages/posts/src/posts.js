import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../navbar/src/vuex';
import App from './App.vue'
import router from './router';
import singleSpaVue from 'single-spa-vue';
console.log(store)
Vue.use(Vuex)

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