<template>
  <Demo :component="Tabs1Demo"></Demo>
</template>

<script lang="ts">

import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';

export default {
  name: 'TabsDome',
  components: {Demo},
  setup() {
    return {
      Tabs1Demo
    };
  }

};


</script>

<style lang="scss" scoped>

</style>