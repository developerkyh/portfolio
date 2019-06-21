import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../pages/admin/login.vue'
import logout from '../pages/admin/logout.vue'
import home from '../pages/home.vue'

import all from '../pages/all.vue'


import pc from '../pages/pc.vue'
import responsive from '../pages/responsive.vue'
import jq from '../pages/jquery.vue'

import vj from '../pages/vuejs.vue'

import design from '../pages/design.vue'

import NotFoundComponent from '../pages/not-found.vue'
import admin from '../pages/admin/admin.vue'
import register from '../pages/admin/RegisterPage.vue'

Vue.use(VueRouter);

const requireAuth = () => (from, to, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
};

export const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    base: __dirname,
    routes: [
        { path: '*', component: NotFoundComponent },
        { path: '/login', component: login },
        { path: '/logout', component: logout },
        { path: '/admin', component: admin , beforeEnter: requireAuth()},
        { path: '/', name: 'home', component: home},
        { path: '/all', component: all},

        { path: '/pc', component: pc},
        { path: '/responsive', component: responsive},
        { path: '/jquery', component: jq},

        { path: '/vue-js', component: vj},

        { path: '/design', component: design},
        { path: '/register', component: register}
    ]
});
