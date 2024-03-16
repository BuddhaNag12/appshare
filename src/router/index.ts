import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requireAuth: true
      },
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          meta: {
            requireAuth: false
          },
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          meta: {
            requireAuth: true
          },
          path: 'register',
          name: 'register',
          component: LoginView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = useAuthStore()
  if (to.matched.some((e) => e.meta.requireAuth)) {
    if (isLoggedIn) {
      next()
    } else {
      next('/auth/login')
    }
  } else {
    next()
  }
})
export default router
