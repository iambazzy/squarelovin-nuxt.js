<template>
  <div class="row-neu flex my-4 rounded-lg">
    <div class="w-1/4 pl-6 flex items-center">
      <input class="neu-input bg-transparent outline-none border-0 ring-0 pl-2" 
        @blur="update" 
        v-if="editing" 
        :value="rowData.id" @input="updateInput('id', $event)" />
      <div v-else>{{ rowData.id }}</div>
    </div>

    <div class="w-2/4 pl-6 flex items-center">
      <input 
        class="neu-input bg-transparent outline-none border-0 ring-0 pl-2"
        @blur="update"
        v-if="editing" 
        :value="rowData.name" 
        @input="updateInput('name', $event)" />
      <div v-else>{{ rowData.name }}</div>
    </div>

    <div class="w-1/4 pl-6 flex items-center">
      <app-button class="px-3" rounded>
        <img src="~/assets/Icon.svg" width="12" />
      </app-button>

      <app-button @click="editing = !editing" class="px-3 mx-3" rounded>
        <img src="~/assets/Vector.svg" width="12" />
      </app-button>

      <app-button @click="$store.commit('deleteItem', rowData.id)" class="px-3" rounded>
        <img src="~/assets/delete.svg" width="12" />
      </app-button>
    </div>
  </div>
</template>

<script>
import generalMixin from "~/mixins/general";

export default {
  mixins: [generalMixin],
  props: {
    rowData: {
      type: Object
    }
  },
  data: () => ({
    editing: false,
  }),
  watch: {
    pageData: {
      handler: function() {
        this.editing = false;
      },
      deep: true
    }
  },
  methods: {
    update() {
      this.editing = false;
    },
    updateInput(type, val) {
      this.$store.commit('updateItem', 
        {
          type, 
          value: val.target.value,
          item: this.rowData
        }
      );
    }
  }
}
</script>
