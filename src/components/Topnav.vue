<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-longmao"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>

    </ul>
    <svg class="toggleAside"
         v-if="toggleMenuButtonVisible"
         @click="toggle">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';


export default {
  name: 'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const menVisible = inject<Ref<boolean>>('menVisible');  //get
    const toggle = () => {
      menVisible.value = !menVisible.value;
    };
    return {toggle: toggle};
  }

};


</script>

<style lang="scss" scoped>
.topnav {
  color: #1e40c8;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 35px;
      height: 35px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;


    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    height: 30px;
    width: 30px;
    position: absolute;
    transform: translateY(-50%);
    left: 16px;
    top: 50%;
  }


  @media (max-width: 505px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }


}
</style>