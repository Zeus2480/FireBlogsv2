import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BLogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Search from '../views/Search.vue'
import AdminPanel from '../views/AdminPanel.vue'
import CreateBlog from '../views/CreateBlog.vue'
import EditProfile from '../views/EditProfile.vue'
import ViewPost from '../views/ViewPost.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  
  {
    path:'/blogs',
    name:'blogs',
    component:BLogs
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/serach',
    name:'search',
    component:Search
  },
  {
    path:'/adminpanel',
    name:'adminpanel',
    component:AdminPanel
  },
  {
    path:'/createblog',
    name:'Createblog',
    component:CreateBlog
  },
  {
    path:'/editprofile',
    name:'EditProfile',
    component:EditProfile
  },
  {
    path:'/viewpost',
    name:'ViewPost',
    component:ViewPost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
