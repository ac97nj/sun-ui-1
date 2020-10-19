import  './lib/sun.scss'

import './index.scss';

import {createApp} from 'vue';      //创建 App 实例重要函数.从 Vue 中引入
import App from './App.vue';
import {router} from './router'


const app = createApp(App);
app.use(router);
app.mount('#app');

//  createApp(App) 相当于 new Vue()