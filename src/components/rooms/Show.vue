<template>
  <div class="room">
    <!-- <api-room v-if="room"></api-room> -->
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Room: {{ room.room_name }}</div>
        <div class="md-subhead">Status: {{ room.room_status }}</div>
      </md-card-header>
      <md-card-content id="text-al">
        <h3>Players: </h3>
        <div v-for="user in room.room_users" :key="room.room_id">
          {{ user.name }}
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-default" id="btn-color" @click.native="leave">Leave</md-button>
        <md-button class="md-primary">Ready</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>


<script>
import RoomsApi from '../../api/rooms.js'
// import UsersApi from '../../api/users.js'
import LobbyApi from '../../api/lobby.js'
import router from '../../router'
// import store from '../../store'

export default {
  name: 'room',
  data () {
    return {
      room: [],
      error: null
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
        // store.dispatch('room')
        this.room = _room
        console.log('room: ', _room)
      })
    },
    leave () {
      LobbyApi.exitLobby()
      router.push({ name: 'Rooms.index' })
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
</style>
