import { createRouter, createWebHistory } from 'vue-router'

import RepoView from '../views/RepoView.vue'
import RepoDetailsView from '../views/RepoDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RepoView',
      component: RepoView
    },
    {
      path: '/repodetailsview/',
      name: 'RepoDetailsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RepoDetailsView
    }
  ]
})

export default router
