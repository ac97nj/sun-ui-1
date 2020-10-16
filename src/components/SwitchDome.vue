<template>
  <div>
    <GSwitch  :value="Y"  @input=" Y = $event "/>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';


import GSwitch from '../lib/Switch.vue';
export default {
  name: "SwitchDome",
  components: {GSwitch},
  setup(){
    const Y = ref(false)

    return {Y}
  }



};


</script>

<style lang="scss" scoped>

</style>