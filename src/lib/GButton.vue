<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">


export default {
  name: 'GButton',


};


</script>

<style lang="scss" scoped>
div {
  border: 1px  solid;
}


</style>