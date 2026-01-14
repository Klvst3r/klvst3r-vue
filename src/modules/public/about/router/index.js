const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/modules/public/about/views/AboutView.vue'),
  },
]

export default routes
