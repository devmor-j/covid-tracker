import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
