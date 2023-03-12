import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// pinia
import { createPinia } from 'pinia';

// bootstrap 响应式
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// style 样式
import '../style/_index.scss';

//第三方组件
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

const app = createApp(App);
const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.mount('#app');
