<template>
  <div class="new-room">
    <md-list class="md-double-line">
      <md-subheader>New Room</md-subheader>
      <md-list-item>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Name</label>
            <md-input v-model="room.name" placeholder="Name" @keyup.enter.native="createRoom"></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="createRoom">Create</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>



<script>
import RoomsApi from '../../api/rooms.js'
// import LobbyApi from '../../api/lobby.js'
// import router from '../../router'
import store from '../../store'

export default {
  name: 'new-room',
  data () {
    return {
      room: {
        name: ''
      }
    }
  },
  methods: {
    createRoom (_id) {
      RoomsApi.createRoom(this.room,
        function (_room) {
          store.dispatch('roomJoin')
          // router.push({name: 'Rooms.show', params: { id: _room.room_id }})
        }
      )
    }
  }
}
</script>
<style scoped>
  .new-room {
    padding-top: 60px;
    margin: auto;
    text-align: center;
    width: 60%;
  }
</style>
