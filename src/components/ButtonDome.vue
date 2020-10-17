<template>
  <div>Button 按钮</div>
  <div>常用的操作按钮</div>
  <div>基础用法</div>
  <div>基础的按钮用法</div>
  <GButton >
    默认按钮
  </GButton>
  <GButton them="button">
    主要按钮
  </GButton>
  <GButton them="link">
    成功按钮
  </GButton>
  <GButton them="text">
    成功按钮
  </GButton>

</template>

<script lang="ts">

import GButton from '../lib/GButton.vue';

export default {
  name: 'buttonDome',
  components: {GButton},
  setup() {
    const onclick = () => {
      console.log('hai');
    };
    return {onclick};
  }
};


</script>

<style lang="scss">


</style>