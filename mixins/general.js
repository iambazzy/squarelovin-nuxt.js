export default {
  computed: {
    cars() {
      return this.$store.getters.getCars;
    },
    pageData() {
      return this.$store.getters.pageInfo;
    },
    pageSize() {
      return Math.ceil(this.cars.length / this.pageData.perPage);
    },
    searched() {
      return this.$store.getters.getSearched
    }
  }
}