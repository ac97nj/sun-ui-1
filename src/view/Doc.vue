<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav"/>
    <div class="content">
      <aside v-if="menVisible">
        <div>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-stated">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menVisible = inject<Ref<boolean>>('menVisible');  //get
    return {menVisible};

  }
};
</script>

<style lang="scss" scoped>


.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 48px;
    padding-left: 148px;
    @media (max-width: 505px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: linear-gradient(360deg, rgba(238, 243, 250, 1) 0%, rgba(229, 236, 248, 1) 36%, rgba(128, 174, 244, 1) 100%);
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;

  padding: 16px 0;
  height: 100%;
  z-index: 10;


  > div {
    padding-top: 70px
  }


  > div > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > div > ol {
    > li {
      > a {
        display: block;
        padding: 5px 31px;
        text-decoration: none;
      }

      .router-link-active {
        color: #f0863f;
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}


</style>