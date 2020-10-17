<template>
  <button
      class="sun-button"
      :class="`sun-them-${them}`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">

export default {
  name: 'GButton',
  props: {
    them: {
      type: String,
      default: 'button'
    }

  }


};


</script>

<style lang="scss" scoped>
.sun-button {
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
  cursor: pointer; //设置光标样式
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 1px fade-out(black, 0.95); //弱化黑色
  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }

  &::-moz-focus-inner {
    border: 0;
  }

}


</style>