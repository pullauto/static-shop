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
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/login-succeed'], resolve),
      meta:{
        loginb:true
      }
    },
    {
      path: '/bids',
      name: 'Bids',
      component: resolve => require(['@/components/Bids'], resolve)
    },

    {
      path: '/firmIndex',
      name: 'firmIndex',
      component: resolve => require(['@/components/register/firm/index'], resolve)
    },
    {
      path: '/amend-userpass',
      name: 'firmIndex',
      component: resolve => require(['@/components/back-account/amend-userpass'], resolve)
    },
    // 招标详情
    {
      path: '/bids-detail',
      name: 'bids-detail',
      component: resolve => require(['@/components/bids/bids-detail'], resolve)
    },
    //后台我的消息
    {
      path: '/mine-await',
      name: 'mine-await',
      component: resolve => require(['@/components/back-mine-message/mine-await'], resolve)
    },
    {
      path: '/mine-message',
      name: 'mine-message',
      component: resolve => require(['@/components/back-mine-message/mine-message'], resolve)
    },
    {
      path: '/online-apply',
      name: 'mine-message',
      component: resolve => require(['@/components/back-teamwork/onLine-apply'], resolve)
    },
    {
      path: '/person',
      name: 'person',
      component: resolve => require(['@/components/back-mine-message/contacts-person'], resolve)
    },
    {
      path: '/enter-bids',
      name: 'enter-bids',
      component: resolve => require(['@/components/back-teamwork/enter-bids-detail'], resolve)
    }
  ]
})
