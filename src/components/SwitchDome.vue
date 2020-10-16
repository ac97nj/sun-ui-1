<template>
  <div>
    <GSwitch :value="toggle" @input=" toggle = $event "/>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';


import GSwitch from '../lib/Switch.vue';

export default {
  name: 'SwitchDome',
  components: {GSwitch},
  setup() {
    const toggle = ref(false);
    return {toggle};
  }


};


</script>

<style lang="scss" scoped>

</style>