<template>
  <div>
    <h2 v-color:background.font="'green'">{{ text }}</h2>
    <h2 v-color:color="'red'">{{ text }}</h2>
    <h2 v-font>локальная деректива</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Привет Вю!!!',
    };
  },
  computed: {},
  methods: {},
  watch: {},
  components: {},
  directives: {
    font: {
      bind(el) {
        el.style.fontSize = '55px';
      },
    },
  },
};
</script>

<style></style>
