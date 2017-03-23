<template>
  <div class="post">
    <span><b>Title: {{ post.name }}</b></span><br>
    <span>Posted by: {{ post.user.email }}</span><br>
    __________________________________________
    <p><i class="el-icon-caret-right"></i> {{ post.content }}</p>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
