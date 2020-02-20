import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import index from '../views/index.vue'
import Tabbar from '../components/Tabbar.vue'
import Pointes from '../views/Pointes.vue'
import shop from '../views/shop.vue'
import me from '../views/me.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:index},
  {path:'/me',component:me},
  {path:'/shop',component:shop},
  {path:'/Pointes',component:Pointes},
  {path:'/Tabbar',component:Tabbar},
  {path:'/index',component:index},
  {path:'/login',component:login},
 
  // {path: '/about',name: 'about',// route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
