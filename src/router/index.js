import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve),
      meta:{
        front_face:true,
        back_face:false
      }
    },

    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/loginb'], resolve),
      meta:{
        front_face:false,
        back_face:false,
        login:true
      }
    },
    {
      path: '/bids',
      name: 'Bids',
      component: resolve => require(['@/components/Bids'], resolve),
      meta:{
        front_face:true,
        back_face:false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/register/account_message'], resolve),
      meta:{
        front_face:true,
        back_face:false
      }
    },
    {
      path: '/firmIndex',
      name: 'firmIndex',
      component: resolve => require(['@/components/register/firm/index'], resolve),
      meta:{
        front_face:true,
        back_face:false
      }
    },
    {
      path: '/amend-userpass',
      name: 'firmIndex',
      component: resolve => require(['@/components/back-account/amend-userpass'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    },
    // 招标详情
    {
      path: '/bids-detail',
      name: 'bids-detail',
      component: resolve => require(['@/components/bids/bids-detail'], resolve),
      meta:{
        front_face:true,
        back_face:false
      }
    },
    //后台我的消息
    {
      path: '/mine-await',
      name: 'mine-await',
      component: resolve => require(['@/components/back-mine-message/mine-await'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    },
    {
      path: '/mine-message',
      name: 'mine-message',
      component: resolve => require(['@/components/back-mine-message/mine-message'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    },
    {
      path: '/online-apply',
      name: 'mine-message',
      component: resolve => require(['@/components/back-teamwork/onLine-apply'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    },
    {
      path: '/person',
      name: 'person',
      component: resolve => require(['@/components/back-mine-message/contacts-person'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    },
    {
      path: '/enter-bids',
      name: 'enter-bids',
      component: resolve => require(['@/components/back-teamwork/enter-bids-detail'], resolve),
      meta:{
        front_face:false,
        back_face:true
      }
    }
  ]
})
