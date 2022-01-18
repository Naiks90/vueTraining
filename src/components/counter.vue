<template>
  <div>
    <h2>{{ message }}</h2>

    <input type="name" v-model="searchName" />

    <ul>
      <li v-for="name of filtersName" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>
<script>
// import listMixin from '../listMixin'; міксини підключені глобально
export default {
  data() {
    return {
      message: 'List',
    };
  },
  // mixins: [listMixin],
};
</script>
<style></style>
