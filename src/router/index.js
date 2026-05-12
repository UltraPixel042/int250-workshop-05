import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/features/dashboard/routes'

const routes = [
  ...dashboardRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Authentication Guard according to README.md
router.beforeEach((to, from, next) => {
  const isAdminRoute = to.path.startsWith('/admin')
  const isAuthenticated = false // Placeholder for auth logic

  if (isAdminRoute && !isAuthenticated && to.path !== '/admin/sign-in') {
    next('/admin/sign-in')
  } else {
    next()
  }
})

export default router
