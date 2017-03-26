import Vue from 'vue'
import store from '../store'

export default {
  register (email, password, name, callback) {
    var regisParams = {
      user: {
        email: email,
        password: password,
        name: name
      }
    }
    Vue.$http.post('/users/register', regisParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error regis')
    })
  },
  login (email, password, callback) {
    console.log(store)
    var loginParams = {
      user: {
        email: email,
        password: password
      }
    }
    Vue.$http.post('/users/login', loginParams)
    .then(function (response) {
      callback(response.data)
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log(store)
    Vue.$http.delete('/users/logout')
    .then(function (response) {
      callback(response.data)
      store.dispatch('logout')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  checkLoggedIn (callback) {
    Vue.$http.get('/users/whoami')
    .then(function (response) {
      store.dispatch('login')
      console.log('logged in')
      // callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
      // callback(response.data)
    })
  },
  getUsers (callback) {
    Vue.$http.get('/users/whoami')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('err get users')
    })
  },
  getUser (userId, callback) {
    Vue.$http.get(`/rooms/${userId}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error get user')
    })
  },
  checkInRoom (callback) {
    Vue.$http.get('/users/whoami')
    .then(function (response) {
      callback({
        id: response.data.user.room_id,
        status: response.data.user.status
      })
      // callback(response.data)
    })
    .catch(function (response) {
      console.log('not in room')
    })
  }
}
