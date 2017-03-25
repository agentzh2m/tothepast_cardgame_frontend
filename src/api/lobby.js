import Vue from 'vue'
import store from '../store'

export default {
  exitLobby (callback) {
    Vue.$http.get('/lobby/exit')
    .then(function (response) {
      callback(response.data)
      store.dispatch('roomExit')
      console.log('lobby exit')
    })
    .catch(function (response) {
      console.log('cannot exit lobby')
    })
  },
  joinLobby (id, callback) {
    console.log('id', id)
    Vue.$http.get('/lobby/join/' + id)
    .then(function (response) {
      callback(response.data)
      store.dispatch('roomJoin')
      console.log('lobby joined')
    })
    .catch(function (response) {
      console.log(response.data)
    })
  }
}
