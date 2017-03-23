import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/register/SignUp.vue'
import PostsIndex from '@/components/posts/Index.vue'
import PostsNew from '@/components/posts/New.vue'
import UserAcc from '@/components/users/Acc.vue'
import PostsShow from '@/components/posts/Show.vue'
import GameInfo from '@/components/gameInfo/info.vue'

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
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/posts/new',
      name: 'Posts.new',
      component: PostsNew
    },
    {
      path: '/users',
      name: 'Users.acc',
      component: UserAcc
    },
    {
      path: '/posts/:id',
      name: 'Posts.show',
      component: PostsShow
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
    }
  ]
})
