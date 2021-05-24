import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FactionHorde from '../components/faction/FactionHorde.vue';
import FactionAlliance from '../components/faction/FactionAlliance.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/horde',
    name: 'Horde',
    component: FactionHorde,
  },
  {
    path: '/alliance',
    name: 'Alliance',
    component: FactionAlliance,
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
  routes
})

export default router
