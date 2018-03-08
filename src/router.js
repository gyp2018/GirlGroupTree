import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Idol from './components/Idol.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/idol/:idolKey', component: Idol },
]

const router = new VueRouter({
  routes
})

export default router
