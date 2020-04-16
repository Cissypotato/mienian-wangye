<template>
  <div id="app">
    <index></index>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

import Index from './pages/index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
