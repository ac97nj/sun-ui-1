<template>
  <button class="sun-switch" @click="toggle"  :class="{'sun-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: 'GSwitch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }


};


</script>

<style lang="scss" scoped>

$h2: 18px;

.sun-switch {
  height: 22px;
  width: 44px;
  border: none;
  background: red;
  border-radius: 11px;
  position: relative;

  > span {
    background: white;
    position: absolute;
    height: 22px;
    width: 22px;
    border-radius: 11px;
    top: 0;
    left: 0;
    transition: left 1s;
  }
}


.sun-switch:focus {
  outline: none;
}


.sun-switch.sun-checked {
  background: blue;

  > span {
    left: calc(100% - #{$h2} - 4px);
  }
}

.sun-switch.sun-checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}


</style>