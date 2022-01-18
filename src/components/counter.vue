<template>
  <div class="counter" :class="{ aqua: counter > 2 }">
    <h2>Счётчик {{ counter }}</h2>
    <button @click="add()">add</button>
    <button @click="counter -= 1">sub</button>
    <button @click="counter = 0">res</button>
    <button @click="addc()">add in perent</button>
    <button @click="subc()">sub in perent</button>
    <button @click="updatecounter2()">
      <!-- Дочерные компоненты(Увеличю на каунтер) -->
      <slot name="btn"></slot>
    </button>
  </div>
</template>
<script>
import { eventEmmiter } from '../main';
export default {
  // props: ['counter'],
  // props: {
  //   counter: Number,
  // },
  props: {
    counter: {
      type: Number,
      default: 0,
    },
    addc: {
      type: Function,
    },
    subc: {
      type: Function,
    },
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    add() {
      // this.counter += 1;
      this.$emit('addCounter', this.counter);
    },
    updatecounter2() {
      eventEmmiter.$emit('counter2Add', this.counter);
    },
  },
};
</script>
<style>
.counter {
  border: 2px solid black;
  margin-bottom: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
/* .counter:hover {
  background-color: cadetblue;
} */
.aqua {
  background-color: aqua;
}
</style>
