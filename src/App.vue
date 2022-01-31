<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr />
    <app-actions></app-actions>
  </div>
</template>

<script>
import counter from './components/counter.vue';
import actions from './components/actions.vue';
import secondCounerVue from './components/second couner.vue';
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  components: {
    appCounter: counter,
    appActions: actions,
    appSecondCounter: secondCounerVue,
  },
};
</script>

<style></style>
