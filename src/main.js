import 'normalize.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import elementUI, { Aside } from 'element-ui';
import axios from 'axios';
Vue.prototype.$http=axios;
Vue.use(VueRouter);
import App from './component/App.vue';
import routerConfig from'./router/routerConfig.js';


import api from'./js/apiConfig.js';

Vue.prototype.$api=api;

axios.defaults.baseURL = 'http://157.122.54.189:9095';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI);
new Vue({
    el:"#app",
    render: c=>c(App),
    router:new VueRouter(routerConfig)
})