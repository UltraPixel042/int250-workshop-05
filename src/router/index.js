import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/features/dashboard/routes'
import authRoutes from '@/features/auth/routes'
import doctorRoutes from '@/features/doctor/routes'
import medicalRoutes from '@/features/medical/routes'
import ambulanceRoutes from '@/features/ambulance/routes'
import profileRoutes from '@/features/profile/routes'
import testRoutes from '@/features/test/routes'

const routes = [
  ...dashboardRoutes,
  ...authRoutes,
  ...doctorRoutes,
  ...medicalRoutes,
  ...ambulanceRoutes,
  ...profileRoutes,
  ...testRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global Authentication Guard
router.beforeEach((to, from, next) => {
  const isPublicRoute = to.path.startsWith('/auth')
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  // Set Document Title
  const title = to.name ? to.name.charAt(0).toUpperCase() + to.name.slice(1) : 'CureX'
  document.title = `${title} | CureX`

  if (!isPublicRoute && !isAuthenticated) {
    // Redirect to Auth Gate if not logged in
    next('/auth/gate')
  } else if (isPublicRoute && isAuthenticated && (to.path === '/auth/sign-in' || to.path === '/auth/gate')) {
    // Redirect to home if already logged in and trying to access login pages
    next('/')
  } else {
    next()
  }
})

export default router
