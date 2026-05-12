export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./pages/HomePage.vue')
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: () => import('./pages/DoctorPage.vue')
  },
  {
    path: '/medical',
    name: 'medical',
    component: () => import('./pages/MedicalPage.vue')
  }
]
