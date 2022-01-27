<template>
  <div class="container pt-2">
    <div class="form-froup">
      <label for="name">Car name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model.trim="carName"
      />
    </div>

    <div class="form-froup mb-2">
      <label for="year">Car year</label>
      <input
        type="text"
        class="form-control"
        id="year"
        v-model.number="carYear"
      />
    </div>
    <button class="btn btn-success mr-2" @click="creatCar">Creat car</button>
    <button class="btn btn-primary" @click="loadCar">Load car</button>
    <hr />
    <ul class="list-group">
      <li class="list-group-item" v-for="car of cars" :key="car.id">
        <strong>{{ car.name }}</strong> -- {{ car.year }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: 'Ford',
      carYear: 2018,
      cars: [],
      resource: null,
    };
  },
  computed: {},
  methods: {
    creatCar() {
      const car = { name: this.carName, year: this.carYear };

      // this.$http
      //   .post('http://localhost:3000/cars', car)
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then(console.log);
      this.resource.save({}, car);
    },
    loadCar() {
      // this.$http
      //   .get('http://localhost:3000/cars')
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((cars) => {
      //     this.cars = cars;
      //   });
      this.resource
        .get()
        .then((res) => res.json())
        .then((cars) => {
          this.cars = cars;
        });
    },
  },
  created() {
    this.resource = this.$resource('cars');
  },
  watch: {
    // cars() {
    //   this.loadCar();
    // },
  },
  components: {},
};
</script>

<style></style>
