<demo>
禁用按钮
</demo>


<template>
  <div>
    <GButton disabled>
      禁用按钮
    </GButton>

    <GButton theme="link" disabled>
      禁用链接按钮
    </GButton>

    <GButton theme="text" disabled>
      禁用文字按钮
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