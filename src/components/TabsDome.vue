<template>
  <Tabs :selectedValue="t"     @update:selected=" t = $event  ">
    <Tab title="导航 1">内容 1</Tab>
    <Tab title="导航 2">内容2</Tab>
    <Tab title="导航 3">内容3</Tab>
  </Tabs>

</template>

<script lang="ts">


import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';

export default {
  name: 'TabsDome',
  components: {Tab, Tabs},
  setup() {
    const t = ref('导航 1');
    return { t }
  }
};


</script>

<style lang="scss" scoped>

</style>