<template>
  <div>
    <h1>Car id {{ id }}</h1>
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
    a() {
      console.log(this.$router);
    },
  },
  watch: {
    $route(toR) {
      this.id = toR.params['id'];
    },
  },
  components: {},
};
</script>

<style></style>
