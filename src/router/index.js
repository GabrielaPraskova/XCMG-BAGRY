import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stroje from '../views/Stroje.vue'
import Spolecnost from '../views/Spolecnost.vue'
import Pujcovna from '../views/Pujcovna.vue'
import Servis from '../views/Servis.vue'
import Kontakt from '../views/Kontakt.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stroje',
    name: 'Stroje',
    component: Stroje
  },
  {
    path: '/pujcovna',
    name: 'Pujcovna',
    component: Pujcovna
  },
  {
    path: '/servis',
    name: 'Servis',
    component: Servis
   
  },
  {
    path: '/spolecnost',
    name: 'Spolecnost',
    component: Spolecnost
  },
  ,
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
