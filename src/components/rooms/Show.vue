<template>
  <div class="show">
    <!-- <iccs340-post v-if="post.user" :post='post'></iccs340-post> -->
    {{ room.name }}
    sdfsdf
  </div>
</template>


<script>
import RoomsApi from '../../api/rooms.js'

export default {
  name: 'rooms',
  // components: {
  //   Iccs340Room: require('./Rooms')
  // },
  data () {
    return {
      post: {},
      comments: [],
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
      RoomsApi.getRooms(this.$route.params.id, _room => {
        this.room = _room
      })
    }
  }
}
</script>
