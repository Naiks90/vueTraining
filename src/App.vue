<template>
  <div>
    <h2>{{ message | UperCase }}</h2>

    <input type="name" v-model="searchName" />

    <ul>
      <li v-for="name of filtersName" :key="name">{{ name }}</li>
    </ul>
    <app-counter></app-counter>
  </div>
</template>

<script>
import counter from './components/counter.vue';
import listMixin from '@/listMixin';
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  components: {
    appCounter: counter,
  },
  mixins: [listMixin],
  filters: {
    UperCase: (value) => value.toUpperCase(),
  },
};
</script>

<style>
li {
  font-size: 35px;
}
</style>
