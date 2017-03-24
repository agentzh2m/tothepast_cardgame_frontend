<template>
  <div class="rooms">
    <h1>ROOMS</h1>
    <br><br>
    <div class="container">
      <md-list class="custom-list md-triple-line" v-if="rooms" v-for="room in rooms" :key="room.id">
        <md-list-item>
          <md-icon class="md-primary">supervisor_account</md-icon>
          <div class="md-list-text-container">
            <span><b>{{ room.name }}</b></span><br>
            <span>Status: {{ room.status }}</span>
          </div>
          <md-button class="md-raised md-primary" @click.native="toShow">enter</md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </div>
  </div>
</template>

<script>
import RoomsApi from '../../api/rooms.js'
// import router from '../../router'

export default {
  name: 'rooms',
  data () {
    return {
      rooms: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    RoomsApi.getRooms(_rooms => {
      _next(vm => {
        vm.rooms = _rooms
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
    toShow (row) {
      this.$router.push(this.$route.path + '/' + row.id)
      // router.push({ name: 'Posts.index' })
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
