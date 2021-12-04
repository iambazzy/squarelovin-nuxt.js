<template>
  <div>
    <header class="flex justify-between">
      <h2 class="text-2xl font-bold flex flex-col">
        <span>Squarelovin <span class="colored">Test</span></span>
        <span><span class="colored">Task</span> Nuxt</span>
      </h2>

      <div class="flex items-center">
        <app-search placeholder="Search by id or name" @input-change="handleInputChange" />
        <app-button bigButton @click="handleClick" class="ml-10">Add Car/Brand</app-button>
      </div>
    </header>

    <div class="flex mt-16">
      <div v-for="(item, index) in headers" :key="index" :class="[item.class]">{{ item.label }}</div>
    </div>

    <table-row v-for="(row, index) in paginatedCars" :key="index" :rowData="row" />

    <div class="flex justify-end" v-if="cars.length > 6 && showPagination">
      <app-button 
        v-for="(item, index) in pageSize" 
        :key="index"
        @click="changePage(index + 1)"
        :active="pageData.pageNo === index + 1"
        :class="[cars.length > 6 && 'mx-2 px-4']" 
        > <span class="colored text-md">{{ index + 1 }}</span> </app-button>
    </div>
  </div>
</template>

<script>
import generalMixin from "~/mixins/general";

export default {
  mixins: [generalMixin],
  data: () => ({
    headers: [
      { 
        label: 'ID',
        class:"w-1/4 pl-6"
      },
      { 
        label: 'BRAND',
        class:"w-2/4 pl-6"
      },
      { 
        label: 'ACTIONS',
        class:"w-1/4 pl-6"
      }
    ],
    showPagination: true
  }),
  computed: {
    paginatedCars() {
      const start = (this.pageData.pageNo - 1) * this.pageData.perPage;
      const end = start + this.pageData.perPage;
      const paginated = this.cars.slice(start, end);
      if (this.searched) {
        this.showPagination = false;
        return this.cars.filter(el => {
          return el.id === parseInt(this.searched) || el.name.toLowerCase().includes(this.searched.toLowerCase());
        });
      }
      this.showPagination = true;
      return paginated;
    },
  },
  methods: {
    handleClick() {
      this.changePage(this.pageSize);
      this.$store.commit('addCar');
    },
    handleInputChange(val) {
      this.$store.commit('setSearched', val);
    },
    changePage(page) {
      this.$store.commit('setPageInfo', { key: 'pageNo', value: parseInt(page) });
    }
  },
}
</script>