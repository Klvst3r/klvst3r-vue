const routes = [

        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/modules/public/submodules/blog/views/BlogView.vue'),
        }
];

export default routes;
    