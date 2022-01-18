<template>
  <h1>{{ counter2 }}</h1>
</template>
<script>
import { eventEmmiter } from '../main';
export default {
  data() {
    return {
      counter2: 0,
    };
  },
  created() {
    eventEmmiter.$on('counter2Add', (event) => {
      this.counter2 += event;
    });
  },
};
</script>

<style></style>
