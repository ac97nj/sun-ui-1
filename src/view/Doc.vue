<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="menVisible">
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
    border: 1px solid red;
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
    border: 1px solid;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
    border: 1px solid;
  }
}

aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top:0;
  left: 0;
  padding: 70px 16px 16px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}

main {
  overflow: auto;
}


</style>