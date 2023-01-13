import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: 'Menu'
          }
        }, {
          path: '/software',
          name: 'software',
          redirect: '/software/Software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: 'Software'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/coca_cola'
            },
            {
              path: '/software/coca_cola',
              name: 'software',
              component: resolve => require(['@/view/Software_coca_cola'], resolve),
              meta: {
                title: 'Past cases丨Coca-cola'
              }
            },
            {
              path: '/software/dalian_ppedl',
              name: 'software',
              component: resolve => require(['@/view/Software_dalian_ppedl'], resolve),
              meta: {
                title: 'Past cases丨Dalian PPEDL'
              }
            },
            {
              path: '/software/huanghai',
              name: 'software',
              component: resolve => require(['@/view/Software_huanghai'], resolve),
              meta: {
                title: 'Past cases丨Huanghai'
              }
            },
            {
              path: '/software/zhengda',
              name: 'software',
              component: resolve => require(['@/view/Software_zhengda'], resolve),
              meta: {
                title: 'Past cases丨Zhengda'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: 'Service'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: 'News'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: 'About Us'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: 'Contact Us'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'], resolve),
          meta: {
            title: 'Service'
          }
        }
      ]
    }, {
      path: '/newsdetails',
      name: 'newsdetails',
      component: resolve => require(['@/view/NewsDetails'], resolve),
      meta: {
        title: 'NewsDetails'
      }
    }
  ]
})
