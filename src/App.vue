<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: "Pattaya";
  src:
    local("Pattaya"), 
    url('./assets/fonts/Pattaya-Regular.ttf') format("truetype");
}
</style>
