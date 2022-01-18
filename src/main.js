import Vue from 'vue';
import App from './App.vue';
import colorDirectiv from './color';

Vue.directive('color', colorDirectiv);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
