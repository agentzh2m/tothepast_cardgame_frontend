<template>
  <div class="nav-game">
    <md-toolbar class="md-dense" style="background-color: black">
      <md-button class="md-dense" @click.native="quit" style="color: red;">Quit Game</md-button>
    </md-toolbar>
  </div>
</template>


<script>
import router from './router'
import UsersApi from './api/users.js'
import LobbyApi from './api/lobby.js'

export default {
  methods: {
    quit () {
      UsersApi.getUsers(function (response) {
        console.log('quit and back to room id:', response.user.room_id)
        LobbyApi.userReady(response.user.status)
        router.push({ name: 'Rooms.show', params: {id: response.user.room_id} })
      })
    }
  }
}
</script>

<style lang="css">
  font-family: 'Open Sans', sans-serif;
  .nav-game {
    text-align: right;
  }
  .btn-align {
    text-align: right;
  }
</style>
