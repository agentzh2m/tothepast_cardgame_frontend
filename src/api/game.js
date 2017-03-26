import Vue from 'vue'
import store from '../store'
import router from '../router'

export default {
  gameState (callback, errCallBack) {
    Vue.$http.get('/game/turn_state')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallBack(response)
    })
  },
  exitGame (roomId, callback, errCallBack) {
    Vue.$http.get('/game/exit_room')
    .then(function (response) {
      store.dispatch('quitGame')
      router.push({ name: 'Rooms.show', params: {id: roomId} })
      callback(response.data)
    })
    .catch(function (response) {
      errCallBack(response)
    })
  },
  turnState (callback) {
    Vue.$http.get('/game/turn_state')
    .then(function (response) {
      store.dispatch('inGame')
      router.push({name: 'GameSession.play'})
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error turn_state')
    })
  },
  getState (callback) {
    Vue.$http.get('/game/turn_state')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error turn_state')
    })
  },
  drawCard (callback) {
    Vue.$http.get('/game/draw_card')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error turn_state')
    })
  },
  endTurn (callback) {
    Vue.$http.get('/game/end_turn')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error turn_state')
    })
  }
}
