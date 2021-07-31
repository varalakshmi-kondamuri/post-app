<template>
  <div id="app">
    <div class="nav">
      <a @click="logout" href="#">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>

import Login from './components/login.vue'
export default {
  name: 'App',
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({'name':Login})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
