<template>
  <div class="counter" :class="{ aqua: counter > 2 }">
    <h2>Счётчик {{ counter }}</h2>
    <button @click="add()">add</button>
    <button @click="counter -= 1">sub</button>
    <button @click="counter = 0">res</button>
  </div>
</template>
<script>
export default {
  props: ['counter'],
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    add() {
      this.counter += 1;
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
