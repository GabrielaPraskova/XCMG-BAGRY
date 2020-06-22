import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Spolecnost from '../views/Spolecnost.vue'
import Pujcovna from '../views/Pujcovna.vue'
import Servis from '../views/Servis.vue'
import Kontakt from '../views/Kontakt.vue'
// import Konfigurator1 from '../views/Konfigurator1.vue'
import Konfigurator2 from '../views/Konfigurator2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  // {
  //   path: '/konfigurator1', 
  //   name: 'Konfigurator1',
  //   component: Konfigurator1
  // },
  {
    path: '/konfigurator2/:typ', 
    name: 'Konfigurator2',
    component: Konfigurator2,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
