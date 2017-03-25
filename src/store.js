import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import UsersApi from '@/api/users.js'

Vue.use(Vuex)

// initial state of the app
const state = {
  auth: false,
  isReg: false,
  uReady: false,
  inRoom: false
}

// mutations are operations that actually mutates the state.
// never call this directly. these actions are only called by `actions` below.
const mutations = {
  login (state) {
    console.log('mutations login')
    UsersApi.checkInRoom(function (response) {
      if (response.status === 'unready') {
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
      if (response.status === 'unready') {
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
  }
}

// operations that can be dispatched from other components.
// example `store.dispatch('login')` will call `login` action and then mutate the state using `mutations.login`
const actions = {
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout'),
  signup: ({ commit }) => commit('signup'),
  userReady: ({ commit }) => commit('userReady'),
  roomJoin: ({ commit }) => commit('roomJoin'),
  roomExit: ({ commit }) => commit('roomExit')
}

// just getter functions.
const getters = {
  loggedIn: state => state.auth,
  roomIn: state => state.inRoom
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
