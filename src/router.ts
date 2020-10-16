import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../src/view/Home.vue';
import doc from '../src/view/Doc.vue';
import switchDome from './components/SwitchDome.vue';
import dialogDome from './components/DialogDome.vue';
import buttonDome from './components/ButtonDome.vue';
import tabsDome from './components/TabsDome.vue';




const history = createWebHashHistory();
export  const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: doc,
      children: [
        {path: 'switch',component:switchDome},
        {path: 'dialog',component:dialogDome},
        {path: 'button',component:buttonDome},
        {path: 'tabs',component:tabsDome},
      ]
    }
  ]
});
router.afterEach( ()=>{
  console.log("路由切换了");
})
