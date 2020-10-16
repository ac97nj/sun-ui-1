<template>
  <div>
    <button v-bind="$attrs">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">


export default {
  name: 'GButton',
  inheritAttrs:false,

};


</script>

<style lang="scss" scoped>
div {
  border: 1px  solid;
}


</style>