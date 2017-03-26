import Vue from 'vue'
import store from '../store'

export default {
  exitLobby (callback) {
    Vue.$http.get('/lobby/exit')
    .then(function (response) {
      store.dispatch('roomExit')
      callback(response.data)
      console.log('lobby exit')
    })
    .catch(function (response) {
      console.log('cannot exit lobby')
    })
  },
  joinLobby (id) {
    console.log('id', id)
    Vue.$http.get('/lobby/join/' + id)
    .then(function (response) {
      store.dispatch('roomJoin')
      console.log('lobby joined')
    })
    .catch(function (response) {
      console.log(response.data)
    })
  },
  userReady (status, callback) {
    console.log('status = ', status)
    if (status === 'ready') {
      Vue.$http.get('/lobby/unready')
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (response) {
        console.log('error')
      })
    } else if (status === 'unready') {
      Vue.$http.get('/lobby/ready')
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (response) {
        console.log('error')
      })
    }
  }
}
