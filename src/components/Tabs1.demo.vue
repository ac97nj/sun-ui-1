<demo>
Tabs 示例
</demo>

<template>
  <Tabs :selectedValue="t"     @update:selected=" t = $event  ">
    <Tab title="导航 1">内容 1</Tab>
    <Tab title="导航 2">内容2</Tab>
    <Tab title="导航 3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">



import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
//用户请勿使用上两句
//import {GButton,GSwitch, GDialog ,Tab,Tabs,openDialog } from "sun-uia-0.0.1";
//用户请使用这一句,代替上一句引入文件



import { ref } from 'vue';
export default {
  name: 'Tabs1Demo',
  components: {Tabs, Tab},
  setup() {
    const t = ref('导航 1');
    return { t }
  }
};


</script>

<style lang="scss" scoped>

</style>