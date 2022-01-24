import VueRouter from 'vue-router';
import Home from './pag/home.vue';
import Cars from './pag/cars.vue';
import Car from './pag/car.vue';
import fullCar from './pag/fullCar.vue';

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
      children: [
        {
          path: 'full',
          component: fullCar,
          name: 'carFulls',
        },
      ],
    },
  ],
  mode: 'history',
});
