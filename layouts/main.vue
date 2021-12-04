<template>
  <main class="reset app-background">
    <Nuxt />
  </main>
</template>

<script>
export default { }
</script>

<style>
  .reset {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    min-height: 100vh
  }

  .colored {
    color: #41B883;
  }

  .app-background {
    background-color: #E5E5E5;
  }

  .neu-input {
    line-height: 40px;
    border: 0.5px solid rgba(255, 255, 255, 0.4);
    background-blend-mode: soft-light, normal;
    box-shadow: inset -2.5px -2.5px 5px #FAFBFF, inset 2.5px 2.5px 5px #A6ABBD;
  }

  .row-neu {
    height: 60px;
    background-blend-mode: soft-light, normal;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: inset -2.5px -2.5px 5px #FAFBFF, inset 2.5px 2.5px 5px #A6ABBD;
  }
</style>