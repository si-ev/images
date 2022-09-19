import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

// Vue.use(VueRouter);
export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: ImageList},
        { path: '/upload', component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

const app = createApp(App);
app.use(store)
app.use(router);
app.mount('#app');
