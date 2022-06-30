import { createRouter, createWebHistory } from 'vue-router'
import AnimeAllView from '../components/AnimeAllView.vue'
import AnimeView from '../components/AnimeView.vue'
import MangaAllView from '../components/MangaAllView.vue'
import MangaView from '../components/MangaView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
  },
  {
    path: '/anime',
    name: 'anime',
    component: AnimeAllView
  },
  {
    path: '/anime/:id',
    component: AnimeView
  },
  {
    path: '/manga',
    name: 'manga',
    component: MangaAllView
  },
  {
    path: '/manga/:id',
    component: MangaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
