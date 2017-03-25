<template>
  <div class="rooms">
    <h1>ROOMS</h1>
    <br><br>
    <div class="container">
      <md-list class="custom-list md-triple-line" v-if="rooms" v-for="room in rooms.rooms" :key="room.room_id">
        <md-list-item>
          <md-icon class="md-primary">supervisor_account</md-icon>
          <div class="md-list-text-container">
            <span><b>{{ room.room_name }}</b></span><br>
            <span>Status: {{ room.room_status }}</span>
          </div>
          <md-button class="md-raised md-primary" @click.native="joinLobby(room.room_id)">enter</md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </div>
  </div>
</template>

<script>
import RoomsApi from '../../api/rooms.js'
import LobbyApi from '../../api/lobby.js'
// import router from '../../router'
import UsersApi from '../../api/users.js'
// import store from '../../store'

export default {
  name: 'rooms',
  data () {
    return {
      rooms: [],
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    RoomsApi.getRooms(_rooms => {
      _next(vm => {
        vm.rooms = _rooms
        console.log(_rooms)
      })
    })
  },
  watch: {
    $route () {
      RoomsApi.getRooms(_rooms => {
        this.rooms = _rooms
        console.log(_rooms)
      })
    }
  },
  methods: {
    joinLobby (id) {
      UsersApi.checkInRoom()
      LobbyApi.joinLobby(id)
      this.$router.push(this.$route.path + '/' + id)
    }
  }
}
</script>

<style scoped>
  .rooms {
    width: 100%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 60%;
  }
</style>
