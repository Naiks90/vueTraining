import VueRouter from 'vue-router';
import Home from './pag/home.vue';
// import Cars from './pag/cars.vue';
import Car from './pag/car.vue';
import fullCar from './pag/fullCar.vue';
import ErrorCMP from './pag/error.vue';

const Cars = (resolve) => {
  require.ensure(['./pag/cars.vue'], () => {
    resolve(require('./pag/cars.vue'));
  });
}; //Lezyloading

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars',
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: fullCar,
          name: 'carFull',
          beforeEnter(to, from, next) {
            next();
          },
        },
      ],
    },
    {
      path: '/none',
      redirect: { name: 'cars' },
    },
    {
      path: '*',
      component: ErrorCMP,
    },
  ],
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    // return { x: 0, y: 500 };
  },
});
