<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link active-class="active" exact tag="li" to="/"
            ><a class="nav-link">Home</a></router-link
          >
          <router-link active-class="active" exact tag="li" to="/cars"
            ><a class="nav-link">Cars</a></router-link
          >
          <router-link active-class="active" exact tag="li" to="/car/3"
            ><a class="nav-link">car3</a></router-link
          >
          <router-link active-class="active" exact tag="li" to="/car/4"
            ><a class="nav-link">car4</a></router-link
          >
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import counter from './components/counter.vue';
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  components: {
    // conterMy: counter,
  },
};
</script>

<style></style>
