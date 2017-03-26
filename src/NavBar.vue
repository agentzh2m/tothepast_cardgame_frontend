<template>
  <div class="nav-bar">
    <md-toolbar class="md-dense" style="background-color: black">
      <md-button class="md-dense" @click.native="homePage"><md-icon>home</md-icon></md-button>
      <span style="font-size: 15px;">Hello, <b>{{ currentUser }}</b></span>
      <md-button class="md-dense" @click.native="newRoom">Create Room</md-button>
      <md-button class="md-dense" @click.native="logout">Log Out</md-button>
    </md-toolbar>
  </div>
</template>


<script>
import UsersApi from './api/users.js'
import router from './router'

export default {
  name: 'nav-bar',
  data () {
    return {
      currentUser: ''
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      var self = this
      UsersApi.getUsers(function (response) {
        self.currentUser = response.user.name
      })
    },
    newRoom () {
      router.push({ name: 'Rooms.new' })
    },
    homePage () {
      router.push({ name: 'Rooms.index' })
    },
    logout () {
      UsersApi.logout()
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
