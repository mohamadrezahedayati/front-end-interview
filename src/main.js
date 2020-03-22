import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue';
import { routes } from './routers';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false



export const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => { return record.meta.requiresAuth; })) {
        if (localStorage.Token == null) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

new Vue({
    components: { App },
    render: (h) => { return h(App); },
    router,
    store
}).$mount('#app');
