<template>
  <div class="room">
    <!-- <api-room v-if="room"></api-room> -->
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Room: <b>{{ room.room_name }}</b></div>
        <div class="md-subhead">Status: {{ room.room_status }}</div>
      </md-card-header>
      <md-card-content id="text-al">
        <p style="font-size: 20px;">Players: </p>
        <div v-for="user in room.room_users" :key="room.room_id" id="indent" style="font-size: 18px;">
          <div v-if="user.status === 'ready'">
            <li><b>{{ user.name }}</b>: <span style="color: green;">{{ user.status }}</span></li>
          </div>
          <div v-else>
            <li><b>{{ user.name }}</b>: <span>{{ user.status }}</span></li>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-default" id="btn-color" @click.native="leave">Leave</md-button>
        <md-button-toggle class="md-accent">
          <md-button class="md-primary" @click.native="ready()">Ready</md-button>
        </md-button-toggle>
      </md-card-actions>
    </md-card>
  </div>
</template>


<script>
import RoomsApi from '../../api/rooms.js'
import UsersApi from '../../api/users.js'
import LobbyApi from '../../api/lobby.js'
// import GameApi from '../../api/game.js'
import router from '../../router'
import store from '../../store'

export default {
  name: 'room',
  data () {
    return {
      room: [],
      error: null,
      runner: null
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
      RoomsApi.getRoom(this.$route.params.id, _room => {
        this.room = _room
      })
      var self = this
      self.runner = setInterval(function () {
        RoomsApi.getRoom(self.$route.params.id, (_room) => {
          // store.dispatch('room')
          self.room = _room
          // console.log(_room.room_users)
          // console.log(_room.room_users.filter(u => u.status === 'ready').length)
          if (_room.room_users.filter(u => u.status === 'ready').length === 4) {
            clearInterval(self.runner)
            store.dispatch('inGame')
            // router.push({name: 'GameSession.play'})
          }
          // console.log('room: ', _room)
        })
      }, 2000)
    },
    leave () {
      clearInterval(this.runner)
      LobbyApi.exitLobby()
      router.push({ name: 'Rooms.index' })
    },
    ready () {
      UsersApi.getUsers(function (response) {
        var currentUserStatus = response.user.status
        LobbyApi.userReady(currentUserStatus)
      })
    }
  }
}
</script>
<style>
.room {
  padding-top: 5%;
  width: 50%;
  margin: auto;
  /*text-align: center;*/
}
#text-al {
  text-align: left;
  padding-left: 10%;
}
#btn-color {
  color: red;
}
#indent {
  padding-left: 20px;
}
</style>
