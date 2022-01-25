<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-info btn-sm" @click="goBackToCar()">Back</button>
    <br />
    <router-link
      class="btn btn-info btn-sm"
      tag="button"
      :to="'/car/' + id + '/full'"
      >full info</router-link
    >
    <hr />
    <router-link
      class="btn btn-info btn-sm"
      tag="button"
      :to="{
        name: 'carFull',
        params: { id: id },
        query: { name: 'Mazda', years: 2000 },
        hash: '#scroll',
      }"
      >full info</router-link
    >
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   id: this.$router.currentRoute.params['id'],
      id: this.$route.params['id'],
    };
  },
  computed: {},
  methods: {
    goBackToCar() {
      this.$router.push('/cars');
    },
  },
  watch: {
    $route(toR) {
      this.id = toR.params['id'];
    },
  },
  components: {},
  beforeRouteLeave(to, fromR, next) {
    if (window.confirm('Ви хотете покинуть страницу?')) {
      next(true);
    }
  },
};
</script>

<style></style>
