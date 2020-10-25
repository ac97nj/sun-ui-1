<demo>
基础用法
</demo>

<template>
  <div>
    <GButton>
      默认按钮
    </GButton>
    <GButton theme="button">
      主要按钮
    </GButton>
    <GButton theme="link">
      链接按钮
    </GButton>
    <GButton theme="text">
      文本按钮
    </GButton>
  </div>
</template>

<script lang="ts">
import GButton from '../lib/GButton.vue';
//用户请勿使用上一句
//import {GButton,GSwitch, GDialog ,Tab,Tabs,openDialog } from "sun-uia-0.0.1";
//用户请使用这一句,代替上一句引入文件



export default {
  components: { GButton}
};
</script>

<style lang="scss" scoped>

</style>