<template>
  <div class="sign-in">
    <md-list class="md-double-line">
      <h1 id="font">To The Past</h1>
      <h2>Enter the game</h2>
      <div class="container">
        <md-list-item>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Email</label>
              <md-input v-model="email" placeholder=""></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Password</label>
              <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="login"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <span style="flex: 1"></span>
          <md-button class="md-raised" style="color: white; background-color: black;" @click.native="login">Login</md-button>
          <span style="flex: 1"></span>
        </md-list-item>
      </div>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style scoped>
  #font {
    font-family: 'Almendra SC';
    font-size: 120px;
    /*width: 100%;*/
  }
  .container {
    width: 30%;
    margin: auto;
  }
  .sign-in {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
  }
</style>
