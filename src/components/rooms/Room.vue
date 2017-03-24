<template>
  <div class="room">
    <span><b>Title: {{ room.name }}</b></span><br>
    <span>Posted by: {{ room.user.name }}</span><br>
  </div>
</template>

<script>

export default {
  name: 'room'
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
