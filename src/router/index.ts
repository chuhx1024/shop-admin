import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('../views/login/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
