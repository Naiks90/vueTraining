import VueRouter from 'vue-router';
import Home from './pag/home.vue';
import Cars from './pag/cars.vue';
import Car from './pag/car.vue';

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/cars',
      component: Cars,
    },
    {
      path: '/car/:id',
      component: Car,
    },
  ],
  mode: 'history',
});
