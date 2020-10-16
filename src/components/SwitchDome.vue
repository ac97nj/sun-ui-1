<template>
  <div>
    <GSwitch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';


import GSwitch from '../lib/Switch.vue';

export default {
  name: 'SwitchDome',
  components: {GSwitch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};


</script>

<style lang="scss" scoped>

</style>