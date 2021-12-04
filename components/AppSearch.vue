<template>
  <div class="neu-input rounded-lg px-3 flex items-center">
    <img src="~/assets/Icon.svg" width="17" />
    <input 
      class="bg-transparent outline-none border-0 ring-0 pl-4"
      :placeholder="placeholder"
      @input="$emit('input-change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  }
}
</script>
