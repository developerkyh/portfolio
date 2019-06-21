import Vue from 'vue'
import VeeValidate from 'vee-validate'

import { store } from './_store';
import { router } from './_helpers';
import app from './app.vue'

Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app)
});
