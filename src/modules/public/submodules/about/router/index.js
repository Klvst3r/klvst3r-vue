const routes = [

        {
            path: '/about',
            name: 'about',
            component: () => import('@/modules/public/submodules/about/views/AboutView.vue'),
        }
];

export default routes;
    