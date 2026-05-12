export default [
  {
    path: '/doctor',
    name: 'doctor-search',
    component: () => import('./pages/DoctorSearchPage.vue')
  },
  {
    path: '/doctor/list/:type',
    name: 'doctor-list',
    component: () => import('./pages/DoctorListPage.vue')
  },
  {
    path: '/doctor/details/:id',
    name: 'doctor-details',
    component: () => import('./pages/DoctorDetailsPage.vue')
  },
  {
    path: '/doctor/book/:id',
    name: 'doctor-booking',
    component: () => import('./pages/BookingPage.vue')
  },
  {
    path: '/doctor/payment',
    name: 'doctor-payment',
    component: () => import('./pages/PaymentPage.vue')
  },
  {
    path: '/doctor/success',
    name: 'doctor-success',
    component: () => import('./pages/SuccessPage.vue')
  },
  {
    path: '/doctor/call',
    name: 'doctor-call',
    component: () => import('./pages/VideoCallPage.vue')
  }
]
