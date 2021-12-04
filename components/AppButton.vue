<template>
  <button v-on="$listeners" 
    :class="[
      'btn',
      active ? 'active-btn': 'btn-neu', 
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
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .btn {
    height: 38px;
    font-size: 13px;  
    background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #E7EBF0;
    background-blend-mode: soft-light, normal;
  }

  .btn-neu {  
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD;
  }

  .active-btn {
    box-shadow: inset -3.38462px -3.38462px 6.76923px #FAFBFF, inset 3.38462px 3.38462px 6.76923px #A6ABBD;
  }

  .circle {
    border-radius: 50px;
  }
</style>