<template>
  <div class="acc">
    <h2>hi</h2>
    <md-list class="custom-list md-triple-line" v-if="users" v-for="user in users" :key="user.id">
      <md-list-item>
        <md-icon class="md-primary">supervisor_account</md-icon>
        <div class="md-list-text-container">
          <span><b>{{ user.name }}</b></span><br>
        </div>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../../api/users.js'

export default {
  name: 'acc',
  data () {
    return {
      users: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    UsersApi.getUsers(_users => {
      _next(vm => {
        vm.users = _users
      })
    })
  },
  watch: {
    $route () {
      UsersApi.getUsers(_users => {
        this.users = _users
      })
    }
  }
}
</script>
