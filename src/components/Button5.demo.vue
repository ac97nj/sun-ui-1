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


export default {
  components: {GButton}
};
</script>

<style lang="scss" scoped>

</style>