import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App.vue';
Vue.use(vueResource);
Vue.http.options.root = 'http://localhost:3000/';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
