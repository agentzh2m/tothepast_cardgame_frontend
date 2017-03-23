<template>
  <div class="nav-bar">
    <md-toolbar class="md-dense" style="background-color: black">
      <div class="btn-align">
        <md-button class="md-dense" @click.native="ToThePast">ToThePast</md-button>
        <md-button class="md-dense" @click.native="login">Login</md-button>
        <md-button class="md-dense" @click.native="regis">Register</md-button>
      </div>
    </md-toolbar>
  </div>
</template>


<script>
// import UsersApi from './api/users.js'
import router from './router'

export default {
  methods: {
    ToThePast () {
      router.push({ name: 'GameInfo.info' })
    },
    regis () {
      router.push({ name: 'Register.sign_up' })
    },
    login () {
      router.push({ name: 'Users.sign_in' })
    }
  }
}
</script>

<style lang="css">
  font-family: 'Open Sans', sans-serif;
  .btn-align {
    text-align: right;
  }
</style>
