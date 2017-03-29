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
          <div v-if="room.room_status === 'playing'">
            <md-button class="md-raised md-primary" disabled>enter</md-button>
          </div>
          <div v-else>
            <md-button class="md-raised md-primary" @click.native="joinLobby(room.room_id)">enter</md-button>
          </div>
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
// import UsersApi from '../../api/users.js'
// import store from '../../store'

export default {
  name: 'rooms',
  data () {
    return {
      rooms: [],
      runner: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    RoomsApi.getRooms(_rooms => {
      _next(vm => {
        vm.rooms = _rooms
        // console.log(_rooms)
      })
    })
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
      self.runner = setInterval(function () {
        RoomsApi.getRooms(_rooms => {
          self.rooms = _rooms
          // console.log(_rooms)
        })
        // RoomsApi.getRoom(this.$route.params.id, _room => {
        //   self.room = _room
        //   console.log('room: ', _room)
        // })
      }, 500)
    },
    joinLobby (id) {
      // UsersApi.checkInRoom()
      clearInterval(self.runner)
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
