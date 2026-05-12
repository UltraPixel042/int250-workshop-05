export default [
  {
    path: '/auth/gate',
    name: 'auth-gate',
    component: () => import('./pages/AuthGate.vue')
  },
  {
    path: '/auth/sign-in',
    name: 'sign-in',
    component: () => import('./pages/SignIn.vue')
  },
  {
    path: '/auth/sign-up',
    name: 'sign-up',
    component: () => import('./pages/SignUp.vue')
  },
  {
    path: '/auth/forgot-password',
    name: 'forgot-password',
    component: () => import('./pages/ForgotPassword.vue')
  }
]
