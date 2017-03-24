<template>
  <div class="nav-bar">
    <md-toolbar class="md-dense" style="background-color: black">
      <md-button class="md-dense" @click.native="homePage"><md-icon>home</md-icon></md-button>
      <md-button class="md-dense" @click.native="myAcc">My Account</md-button>
      <md-button class="md-dense" @click.native="newRoom">Create Room</md-button>
      <md-button class="md-dense" @click.native="logout">Log Out</md-button>
    </md-toolbar>
  </div>
</template>


<script>
import UsersApi from './api/users.js'
import router from './router'

export default {
  methods: {
    newRoom () {
      router.push({ name: 'Rooms.new' })
    },
    homePage () {
      router.push({ name: 'Rooms.index' })
    },
    logout () {
      UsersApi.logout()
    },
    myAcc () {
      router.push({ name: 'Users.acc' })
    }
  }
}
</script>

<style lang="css">
  font-family: 'Open Sans', sans-serif;
  .nav-bar {
    text-align: right;
  }
  .btn-align {
    text-align: right;
  }
</style>
