<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggle"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  setup() {
    const menVisible = inject<Ref<boolean>>('menVisible');  //get
    const toggle = () => {
      menVisible.value = !menVisible.value;
    };
    console.log(menVisible.value);
    return {toggle: toggle};
  }

};


</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

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
    background: red;
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