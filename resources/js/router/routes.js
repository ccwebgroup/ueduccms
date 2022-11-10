const routes = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "/",
                component: () => import("../pages/HomePage.vue"),
            },
            {
                path: "/television",
                component: () => import("../pages/HomePage.vue"),
            },
            {
                path: "/mediums",
                component: () => import("../pages/HomePage.vue"),
            },
        ],
    },
];

export default routes;
