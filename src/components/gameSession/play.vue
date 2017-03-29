<template lang="html">
  <div class="play" :data='otherPlayers'>
    <md-layout md-gutter>
      <md-layout md-align="left" md-flex="33">
        <md-button id="quit" @click.native="quit" style="color: red;">quit game</md-button>
      </md-layout>
    </md-layout>
    <br>

    <!-- top row -->
    <div class="top-row">
      <md-layout md-gutter>
        <!-- top left -->
        <md-layout md-align="center" md-flex="33"></md-layout>
        <!-- top mid player -->
        <md-layout md-align="center" md-flex="33">
          <md-layout md-align="center" md-flex="35">
            <div class="img-size">
              x {{ otherPlayers[1].num_card }}
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="left" md-flex="35" id="txt-info">
            <br>
            <div v-if="otherPlayers[1].is_turn === true">
              <br>
              <span style="color: #42FE48;"><b>{{ otherPlayers[1].name }}</b></span>'s turn
            </div>
            <div v-else>
              <br>
              <b>{{ otherPlayers[1].name }}</b>
            </div>
          </md-layout>
        </md-layout>
        <!-- top right -->
        <md-layout md-align="center" md-flex="33"></md-layout>
      </md-layout>
    </div>

    <!-- middle row -->
    <div class="mid-row">
      <md-layout md-gutter>
        <!-- mid left player -->
        <md-layout md-align="center" md-flex="33">
          <md-layout md-align="center" md-flex="35">
            <div class="img-size">
              x {{ otherPlayers[0].num_card }}
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="left" md-flex="35" id="txt-info">
            <br>
            <div v-if="otherPlayers[0].is_turn === true">
              <br>
              <span style="color: #42FE48;"><b>{{ otherPlayers[0].name }}</b></span>'s turn
            </div>
            <div v-else>
              <br>
              <b>{{ otherPlayers[0].name }}</b>
            </div>
          </md-layout>
        </md-layout>
        <!-- mid -->
        <md-layout md-align="center" md-flex="33">
          <br>
          <br>
          <br>
          <br>
          <br>
        </md-layout>
        <!-- mid right -->
        <md-layout md-align="center" md-flex="33">
          <md-layout md-align="center" md-flex="35">
            <div class="img-size">
              x {{ otherPlayers[2].num_card }}
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="left" md-flex="35" id="txt-info">
            <br><br>
            <div v-if="otherPlayers[2].is_turn === true">
              <br>
              <span style="color: #42FE48;"><b>{{ otherPlayers[2].name }}</b></span>'s turn
            </div>
            <div v-else>
              <br>
              <b>{{ otherPlayers[2].name }}</b>
            </div>
          </md-layout>
        </md-layout>
      </md-layout>
    </div>

    <!-- bottom row, player: ME -->
    <!-- left box (card box) -->
    <md-layout md-gutter>
      <md-layout md-flex="75">
        <div class="my-player" :data="myCards">
          <md-layout md-row md-gutter="16" id="card-holder">\
            <md-layout>
              <div id="img">
                x {{ myCards["Gold"] }}
                <md-button @click.native="useGold('Gold')" id="img"><img src="/static/cards/normalAction/gold.jpg"></md-button>
              </div>
            </md-layout>

            <md-layout>
              <div id="img">
                x {{ myCards["Silver"] }}
                <md-button @click.native="useGold('Silver')" id="img"><img src="/static/cards/normalAction/silver.jpg"></md-button>
              </div>
            </md-layout>

            <md-layout>
              <div id="img">
                x {{ myCards["Steal"] }}
                <md-button id="img"><img src="/static/cards/normalAction/steal.jpg"></md-button>
              </div>
            </md-layout>

            <md-layout>
              <div id="img">
                x {{ myCards["Deny"] }}
                <md-button id="img"><img src="/static/cards/normalAction/deny.jpg"></md-button>
              </div>
            </md-layout>

            <md-layout>
              <div id="img">
                x 0
                <md-button id="img"><img src="/static/cards/special/confess.jpg"></md-button>
              </div>
            </md-layout>

            <md-layout>
              <div id="img">
                x 0
                <md-button id="img"><img src="/static/cards/special/kill.jpg"></md-button>
              </div>
            </md-layout>
            <md-layout>
              <div id="img">
                x 0
                <md-button id="img"><img src="/static/cards/special/protect.jpg"></md-button>
              </div>
            </md-layout>
          </md-layout>
        </div>
      </md-layout>
      <!-- right box (next to card box) have info about player and button -->
      <md-layout id="my-txt-info">
        <ul>
          <br>
          <div v-if="isMyTurn === true" style="font-size: 35px;">
            <span style="color: #42FE48;"><b>{{ currentUser }}</b></span>'s turn
          </div>
          <div v-else style="font-size: 35px;">
            <b>{{ currentUser }}</b>
          </div>
          <br>
          <span>Character: {{ myCharacter }}</span><br><br>
          <span>Gold: {{ myGold }}</span><br><br>
          <md-button class="md-raised" @click.native="draw">draw</md-button>
          <md-button class="md-raised" @click.native="endTurn">end turn</md-button>
        </ul>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import GameApi from '../../api/game.js'
import UsersApi from '../../api/users.js'
import LobbyApi from '../../api/lobby.js'
import CardApi from '../../api/cards.js'

export default {
  name: 'play',
  data () {
    return {
      isMyTurn: null,
      myUserId: null,
      myGold: null,
      currentUser: null,
      otherPlayers: [],
      myCharacter: null,
      myCards: {'Gold': 0, 'Silver': 0, 'Deny': 0, 'Steal': 0},
      myState: null,
      error: null,
      runner: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      var self = this
      UsersApi.getUsers(function (response) {
        self.currentUser = response.user.name
      })
      self.runner = setInterval(function () {
        GameApi.getState(response => {
          self.myState = response.is_my_turn
          var myCards = {'Gold': 0, 'Silver': 0, 'Deny': 0, 'Steal': 0}
          // console.log(response.my_card)
          for (var card in response.my_card) {
            myCards[response.my_card[card]] += 1
          }
          self.myCards = myCards
          self.otherPlayers = response.other_player_state
          self.myCharacter = response.my_character
          self.isMyTurn = response.is_my_turn
          self.myGold = response.my_gold
        })
      }, 500)
    },
    draw () {
      GameApi.drawCard()
    },
    quit () {
      UsersApi.getUsers(function (response) {
        clearInterval(self.runner)
        LobbyApi.userReady(response.user.status)
        GameApi.exitGame(response.user.room_id)
      })
    },
    endTurn () {
      GameApi.endTurn()
    },
    useGold (cardName) {
      UsersApi.getUsers(function (response) {
        self.myUserId = response.user.id
        console.log('card name: ', cardName)
        console.log('user id: ', self.myUserId)
        CardApi.useCard(cardName, self.myUserId)
      })
    }
  }
}
</script>

<style lang="css">
  .play {
    margin: auto;
    background-color: black;
    color: white;
  }
  #red-cir {
    width: 15%;
  }
  #green-cir {
    width: 10%;
  }
  #img {
      width: 115%;
      font-size: 130%;
  }
  .img-size {
    width: 80%;
  }
  #card-holder {
    width: 100%;
  }
  .my-player {
    margin-bottom: 5%;
  }
  .other-player {
    padding-bottom: 100px;
  }
  #txt-info {
    padding-left: 10px;
    text-align: left;
    font-size: 150%;
  }
  #my-txt-info {
    margin-right: 2%;
    text-align: left;
    font-size: 130%;
  }
  .top-row {
    margin-bottom: 5%;
    text-align: center;
  }
  .mid-row {
    margin-bottom: 10%;
    text-align: center;
  }
  #quit {
    margin-top: 5%;
    margin-left: 10%;
  }
</style>
