import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../src/view/Home.vue';
import doc from '../src/view/Doc.vue';
import switchDome from './components/SwitchDome.vue';
import dialogDome from './components/DialogDome.vue';
import buttonDome from './components/ButtonDome.vue';
import tabsDome from './components/TabsDome.vue';
import intro from './view/intro.vue';
import install from './view/install.vue';
import GetStarted from './view/GetStarted.vue';
import {h} from 'vue';
import Markdown from './components/markdown.vue'

const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })


const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: doc,
      children: [
        {path: 'switch', component: switchDome},
        {path: 'dialog', component: dialogDome},
        {path: 'button', component: buttonDome},
        {path: 'tabs', component: tabsDome},
        { path: "intro", component: md('intro') },
        {path: 'install', component: md('install')},
        {path: 'get-stated', component: md('GetStarted')}
      ]
    }
  ]
});
router.afterEach(() => {
  console.log('路由切换了');
});
