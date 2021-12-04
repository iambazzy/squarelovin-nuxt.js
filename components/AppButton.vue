<template>
  <button v-on="$listeners" 
    :class="[
      'btn-neu', 
      bigButton ? 'px-6' : 'px-1', 
      rounded ? 'circle' : 'rounded-lg'
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    bigButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .btn-neu {
    height: 38px;
    font-size: 13px;
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD;
    background-blend-mode: soft-light, normal;
    background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #E7EBF0;
  }

  .circle {
    border-radius: 50px;
  }
</style>