import Vue from 'vue'

export default {
  getRooms (callback, errCallback) {
    Vue.$http.get('/rooms.json')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  getRoom (roomId, callback) {
    // Formatted string in JS is wrapped by ` not '
    Vue.$http.get(`/rooms/${roomId}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error get room')
    })
  },
  createRoom (params, callback, errCallback) {
    console.log('params:', params)
    var roomParams = { room: params }
    Vue.$http.post('/rooms.json', roomParams)
    // Vue.$http.post('/rooms.json', params)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
