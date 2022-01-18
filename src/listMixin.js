export default {
  data() {
    return {
      searchName: '',
      message: 'Hello Vue!',
      names: ['Sasha', 'Sveta', 'Gena', 'Ura', 'Marina', 'Vlada'],
    };
  },
  computed: {
    filtersName() {
      return this.names.filter(
        (name) =>
          name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      );
    },
  },
};
