import Vue from 'vue';
import App from './App.vue';
import listMixin from '@/listMixin';

Vue.mixin(listMixin);

Vue.filter('lowerCase', (valeu) => valeu.toLowerCase());

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
