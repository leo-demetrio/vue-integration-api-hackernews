import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Comments from '@/pages/Comments';

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/comments',
        component: Comments
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;