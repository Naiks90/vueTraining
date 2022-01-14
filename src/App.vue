<template>
  <div>
    <h2>{{ c }}</h2>
    <conter-my
      :counter="c"
      @addCounter="c = $event + 1"
      :addc="addc"
      :subc="subc"
    ></conter-my>
    <conter-my :addc="addc" :subc="subc"></conter-my>
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
  methods: {
    addc() {
      this.c += 1;
    },
    subc() {
      this.c -= 1;
    },
  },
  watch: {},
  components: {
    conterMy: counter,
  },
};
</script>

<style></style>
