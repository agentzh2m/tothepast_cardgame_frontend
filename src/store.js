import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import UsersApi from '@/api/users.js'

Vue.use(Vuex)

// initial state of the app
const state = {
  auth: false,
  isReg: false,
  inRoom: false,
  inGame: false
}

// mutations are operations that actually mutates the state.
// never call this directly. these actions are only called by `actions` below.
const mutations = {
  login (state) {
    console.log('mutations login')
    UsersApi.checkInRoom(function (response) {
      if (response.status === 'unready' || response.status === 'ready') {
        state.inRoom = true
        state.auth = true
        router.push({name: 'Rooms.show', params: {id: response.id}})
      } else {
        state.auth = true
        router.push({ name: 'Rooms.index' })
      }
    })
  },
  logout (state) {
    console.log('mutations logout')
    state.auth = false
    router.push({ name: 'Users.sign_in' })
  },
  signup (state) {
    console.log('mutations signup')
    state.isReg = true
    router.push({ name: 'Register.sign_up' })
  },
  roomJoin (state) {
    console.log('roomJoin: mutations in the room')
    UsersApi.checkInRoom(function (response) {
      console.log('res stats', response.status)
      if (response.status === 'unready' || response.status === 'ready') {
        console.log('going in')
        state.inRoom = true
        // state.auth = false
        router.push({name: 'Rooms.show', params: {id: response.id}})
      } else {
        state.auth = true
        router.push({ name: 'Rooms.index' })
      }
    })
  },
  roomExit (state) {
    console.log('exit room')
    state.inRoom = false
    state.auth = true
    router.push({ name: 'Rooms.index' })
    // console.log('in-room: ', state.inRoom)
  },
  inGame (state) {
    state.inGame = true
    router.push({name: 'GameSession.play'})
  }
}

// operations that can be dispatched from other components.
// example `store.dispatch('login')` will call `login` action and then mutate the state using `mutations.login`
const actions = {
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout'),
  signup: ({ commit }) => commit('signup'),
  roomJoin: ({ commit }) => commit('roomJoin'),
  roomExit: ({ commit }) => commit('roomExit'),
  inGame: ({ commit }) => commit('inGame')
}

// just getter functions.
const getters = {
  loggedIn: state => state.auth,
  roomIn: state => state.inRoom,
  inGame: state => state.inGame
}

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/store.js will always return the same instance
// identical to exporting
// exports.default = new _vuex2.default.Store({
//   state: state,
//   getters: getters,
//   actions: actions,
//   mutations: mutations
// });

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
