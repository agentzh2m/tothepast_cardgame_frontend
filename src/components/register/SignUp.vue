<template>
  <div class="sign-up">
    <md-list class="md-double-line">
      <h1 id="font">To The Past</h1>
      <div class="container">
        <h2>Register</h2>
        <md-list-item>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Name</label>
              <md-input v-model="name" placeholder="Name"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Email</label>
              <md-input v-model="email" placeholder="" type="email"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-text-container">
            <md-input-container>
              <label>Password</label>
              <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="toLogin"></md-input>
            </md-input-container>
          </div>
        </md-list-item>
        <md-list-item>
          <span style="flex: 1"></span>
          <md-button class="md-raised md-primary" @click.native="toLogin" style="background-color: black;">Submit</md-button>
          <span style="flex: 1"></span>
        </md-list-item>
      </div>
    </md-list>
  </div>
</template>

<script>
import router from '../../router'
import UsersApi from '../../api/users.js'

export default {
  name: 'sign-up',
  data () {
    return {
      name: '',
      password: '',
      email: ''
    }
  },
  methods: {
    toLogin () {
      UsersApi.register(this.email, this.password, this.name, function (_response) {
        router.push({ name: 'Users.sign_in' })
      })
    }
  }
}
</script>

<style>
  #font {
    font-family: 'Almendra SC';
    font-size: 120px;
    /*width: 100%;*/
  }
  .sign-up {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .container {
    width: 40%;
    margin: auto;
  }
</style>
