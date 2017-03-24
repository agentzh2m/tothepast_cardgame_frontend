<template>
  <div class="acc">
    <h2>hi</h2>
  </div>
</template>

<script>
import RoomsApi from '../../api/rooms.js'

export default {
  name: 'acc',
  data () {
    return {
      posts: null,
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
      })
    }
  }
}
</script>
