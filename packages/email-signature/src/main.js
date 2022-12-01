import Vue, { createApp } from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import App from './App.vue';

const app = createApp(App);

app.mount('#app');
