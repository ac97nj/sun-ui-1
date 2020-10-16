<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
  <button @mouseover="onMouseover">133</button>
</template>

<script lang="ts">


export default {
  name: 'GButton',
  inheritAttrs: false,
  setup(props, context) {
    const {size,onMouseover,...rest} = context.attrs;
    return {size, onMouseover ,rest};
  }

};


</script>

<style lang="scss" scoped>
div {
  border: 1px solid;
}


</style>