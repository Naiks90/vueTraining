<template>
  <div>
    <conter-my :counter="c"></conter-my>
  </div>
</template>

<script>
import counter from './components/counter.vue';
export default {
  data() {
    return {
      c: 5,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  components: {
    conterMy: counter,
  },
};
</script>

<style></style>
