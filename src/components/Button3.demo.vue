<demo>
不同级别按钮
</demo>


<template>

  <div>
    <GButton level="main">主要按钮</GButton>
    <GButton>普通按钮</GButton>
    <GButton level="danger">危险按钮</GButton>
  </div>

  <div>
    <GButton theme="link" level="main">
      主要链接按钮
    </GButton>
    <GButton theme="link">
      普通链接按钮
    </GButton>
    <GButton theme="link" level="danger">
      危险链接按钮
    </GButton>
  </div>


  <div>
    <GButton theme="text" level="main">
      主要文字按钮
    </GButton>

    <GButton theme="text">
      普通文字按钮
    </GButton>
    <GButton theme="text" level="danger">
      危险文字按钮
    </GButton>
  </div>


</template>

<script lang="ts">
import GButton from '../lib/GButton.vue';


export default {
  components: {GButton}
};
</script>

<style lang="scss" scoped>
div{
  margin: 10px;
}


</style>