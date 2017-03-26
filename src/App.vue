<template>
  <div id="app">
    <div v-if="$store.getters.inGame">
      <nav-game></nav-game>
    </div>
    <div v-else-if="$store.getters.loggedIn || $store.getters.roomIn">
      <nav-bar></nav-bar>
    </div>
    <div v-else>
      <front-nav></front-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    NavBar: require('./NavBar'),
    FrontNav: require('./FrontNav'),
    NavGame: require('./NavGame')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}
html, body {
  height: 100%;
  width: 100%;
}
.barnav {
  background-color: black;
  color: white;
}
</style>
