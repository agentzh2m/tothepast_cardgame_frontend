<template>
  <div class="posts">

    <h2>ROOMS</h2>
    <md-list class="custom-list md-triple-line" v-for="post in posts" :key="post.id">
      <md-list-item>
        <md-icon class="md-primary">supervisor_account</md-icon>
        <div class="md-list-text-container">
          <span><b>{{ post.id }}: {{ post.name }}</b></span><br>
          <span>Status: waiting..</span>
        </div>
        <md-button class="md-raised md-primary" @click.native="toShow">enter</md-button>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
// import router from '../../router'

export default {
  name: 'posts',
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
  .posts {
    padding: 0 10px;
  }
</style>
