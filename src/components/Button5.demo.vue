<demo>
加载按钮
</demo>


<template>
  <div>
    <GButton loading>加载中</GButton>
    <GButton>加载完毕</GButton>
  </div>
</template>

<script lang="ts">
import GButton from '../lib/GButton.vue';
//用户请勿使用上一句
//import {GButton,GSwitch, GDialog ,Tab,Tabs,openDialog } from "sun-uia-0.0.1";
//用户请使用这一句,代替上一句引入文件

export default {
  components: {GButton}
};
</script>

<style lang="scss" scoped>

</style>