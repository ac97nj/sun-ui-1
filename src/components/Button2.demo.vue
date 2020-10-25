<demo>
不同尺寸按钮
</demo>


<template>
  <div>
    <GButton size="big">
      大型按钮
    </GButton>
    <GButton>
      默认按钮
    </GButton>
    <GButton size="small">
      小型按钮
    </GButton>
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