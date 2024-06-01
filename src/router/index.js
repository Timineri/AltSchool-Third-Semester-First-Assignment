import { createRouter, createWebHistory } from 'vue-router'

import RepoView from '../views/RepoView.vue'
import RepoDetailsView from '../views/RepoDetailsView.vue'
import LiveSiteView from '../views/LiveSiteView.vue'

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
      component: RepoDetailsView
    },
    {
      path: '/livesiteview/',
      name: 'LiveSiteView',
      component: LiveSiteView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/PageNotFoundView.vue')
    }
  ]
})

export default router
