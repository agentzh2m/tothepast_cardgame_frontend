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
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log(store)
    Vue.$http.delete('/users/logout')
    .then(function (response) {
      store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  checkLoggedIn () {
    Vue.$http.get('/users/whoami')
    .then(function (response) {
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  }
}
