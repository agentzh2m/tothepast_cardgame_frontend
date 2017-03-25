import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/register/SignUp.vue'
import RoomsIndex from '@/components/rooms/Index.vue'
import RoomsNew from '@/components/rooms/New.vue'
import UserAcc from '@/components/users/Acc.vue'
import RoomsShow from '@/components/rooms/Show.vue'
import GameInfo from '@/components/gameInfo/info.vue'
import GameSession from '@/components/gameSession/play.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/rooms',
      name: 'Rooms.index',
      component: RoomsIndex
    },
    {
      path: '/rooms/new',
      name: 'Rooms.new',
      component: RoomsNew
    },
    {
      path: '/users',
      name: 'Users.acc',
      component: UserAcc
    },
    {
      path: '/rooms/:id',
      name: 'Rooms.show',
      component: RoomsShow
    },
    {
      path: '/sign_up',
      name: 'Register.sign_up',
      component: SignUp
    },
    {
      path: '/info',
      name: 'GameInfo.info',
      component: GameInfo
    },
    {
      path: 'game_session/play',
      name: 'GameSession.play',
      component: GameSession
    }
  ]
})
