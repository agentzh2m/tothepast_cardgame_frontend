<template lang="html">
  <div class="play">
    <div class="other-player">
      play time bitches<br>
    </div>
    <!-- top row -->
    <div class="top-row">
      <md-layout md-gutter>
        <!-- top left -->
        <md-layout md-align="center" md-flex="33"></md-layout>
        <!-- top mid player -->
        <md-layout md-align="center" md-flex="33">
          <md-layout md-align="center" md-flex="35">
            <div class="img-size">
              x 0
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="center" md-flex="35" id="txt-info">
            <br>
            Player: name<br>
            Character: lol idk whatever<br>
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
              x 0
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="center" md-flex="35" id="txt-info">
            <br>
            Player: name<br>
            Character: lol idk whatever<br>
          </md-layout>
        </md-layout>
        <!-- mid -->
        <md-layout md-align="center" md-flex="33">
          <br>
          <br>
          <br>
          <br>
          <br>
          text log
        </md-layout>
        <!-- mid right -->
        <md-layout md-align="center" md-flex="33">
          <md-layout md-align="center" md-flex="35">
            <div class="img-size">
              x 0
              <img src="/static/cards/cardBack.jpg">
            </div>
          </md-layout>
          <md-layout md-align="center" md-flex="35" id="txt-info">
            <br>
            Player: name<br>
            Character: lol idk whatever<br>
          </md-layout>
        </md-layout>
      </md-layout>
    </div>

    <!-- bottom row -->
    <!-- left box (card box) -->
    <md-layout md-gutter>
      <md-layout md-flex="75">
        <div class="my-player">
          <md-layout md-row md-gutter="16" id="card-holder">
            <md-layout>
              <div id="img">
                x 0
                <md-button id="img"><img src="/static/cards/normalAction/gold.jpg"></md-button>
              </div>
            </md-layout>
            <md-layout>
              <div id="img">
                x 0
                <md-button id="img"><img src="/static/cards/normalAction/steal.jpg"></md-button>
              </div>
            </md-layout>
            <md-layout>
              <div id="img">
                x 0
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
          Player: username<br><br>
          Character: haha<br><br>
          <md-button class="md-raised">draw</md-button>
          <md-button class="md-raised">end turn</md-button>
        </ul>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'play'
}
</script>

<style lang="css">
.play {
  margin: auto;
  background-color: black;
  color: white;
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
  text-align: left;
  font-size: 100%;
}
#my-txt-info {
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
</style>
