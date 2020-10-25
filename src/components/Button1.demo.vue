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


export default {
  components: { GButton}
};
</script>

<style lang="scss" scoped>

</style>