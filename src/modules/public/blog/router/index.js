const routes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/modules/public/blog/views/BlogView.vue'),
  },
]

export default routes
