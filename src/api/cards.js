import Vue from 'vue'
// import store from '../store'

export default {
  useCard (cardName, userID, callback) {
    var params = {
      card_name: cardName,
      user_id: userID
    }
    console.log('params:', params)
    Vue.$http.post('/card/use', params)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error post use card')
    })
  }
}
