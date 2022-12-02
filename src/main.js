import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../style/_index.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// const app = createApp(App);

createApp(App).use(store).use(ElementPlus).use(router).mount('#app');
