<template>
  <div>
    <div>Button 按钮</div>
    <div>常用的操作按钮</div>
    <div>基础用法</div>
    <div>基础的按钮用法</div>
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
  <div>
    <div>不同尺寸</div>
    <div>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</div>
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

  <div>
    <div>级别按钮</div>

    <dir>
      <GButton level="main">主要按钮</GButton>
      <GButton>普通按钮</GButton>
      <GButton level="danger">危险按钮</GButton>
    </dir>

    <dir>

    </dir>
    <GButton theme="link" level="main">
      主要链接按钮
    </GButton>

    <GButton theme="link">
      普通链接按钮
    </GButton>

    <GButton theme="link" level="danger">
      危险链接按钮
    </GButton>

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


  <div>
    <div>按钮不可用状态。</div>
    <div>禁用状态</div>
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


  <div>
    <div>加载状态</div>
    <GButton loading>加载中</GButton>
    <GButton>加载完毕</GButton>
  </div>


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

<style lang="scss" scoped>


</style>