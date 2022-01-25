<template>
  <div>
    <h4 v-if="name">{{ name }}</h4>
    <h4 v-else>Ford</h4>
    <h5 v-if="age">Age in {{ age }}</h5>
    <h5 v-else>Age in 2016</h5>
    <div class="scroll"></div>
    <h5 id="scroll">Текст з низу</h5>
    <div class="scroll"></div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.query.name;
    },
    age() {
      return this.$route.query.years;
    },
  },
  beforeRouteEnter(to, fromR, next) {
    next(true);
  },
};
</script>

<style>
.scroll {
  width: 100px;
  height: 1000px;
  background-color: bisque;
}
</style>
