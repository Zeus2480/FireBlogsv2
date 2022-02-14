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
import Profile from '../views/Profile.vue'
import Bookmarks from '../views/Bookmarks.vue'
import EditBlog from '../views/EditBlog.vue'
import PageNotFound from "../views/PageNotFound.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    props:true
  },
  {
    path: '/editblog/:id',
    name: 'editblog',
    component: EditBlog,
    props:true
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: Bookmarks
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props:true
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
    path:'/search',
    name:'search',
    component:Search,
    props:true
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
    path:'/viewpost/:id',
    name:'ViewPost',
    component:ViewPost,
    props:true
  },
  {
    path:'*',
    component:PageNotFound
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
