<template>
  <div class="div">
    <button class="btn btn-success mr-2" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCounter(val) {
      //   this.$store.commit('chanchCounter', val);
      this.$store.dispatch('asyncChanchCounter', {
        counterValue: val,
        timeoutDaley: 1200,
      });
    },
  },
};
</script>

<style scoped></style>
