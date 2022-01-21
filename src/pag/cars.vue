<template>
  <div>
    <h1>Car pages</h1>

    <ul>
      <router-link tag="li" v-for="car in 5" :key="car" :to="/car/ + car">
        <a>car {{ car }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  components: {},
};
</script>

<style></style>
