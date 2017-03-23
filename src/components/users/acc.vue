<template>
  <div class="acc">
    <h2>hi</h2>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'acc',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>
