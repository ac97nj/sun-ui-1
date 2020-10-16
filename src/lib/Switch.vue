<template>
  <button @click="AA" :class="{checked:checked}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'GSwitch',



  setup() {
    const checked = ref(false);
    const AA = () => {
      checked.value = !checked.value;
    };
    return {checked, AA};
  }


};


</script>

<style lang="scss" scoped>

$h2: 18px;

button {
  height: 22px;
  width: 44px;
  border: none;
  background: red;
  border-radius: 11px;
  position: relative;
}

span {
  background: white;
  position: absolute;
  height: 22px;
  width: 22px;
  border-radius: 11px;
  top: 0;
  left: 0;
  transition: left 1s;
}

button:focus{
  outline: none;
}


button.checked {
  background: blue;

  > span {
    left: calc(100% - #{$h2} - 4px);
  }
}


</style>