<template>
  <Demo :component="Diglog1Demo"></Demo>
  <Demo :component="Diglog2Demo"></Demo>
</template>

<script lang="ts">
import Diglog1Demo from './Dialog1.demo.vue';
import Diglog2Demo from './Dialog2.demo.vue';


import Demo from './Demo.vue';

export default {
  name: 'DiaLogDome',
  components: {Demo},
  setup() {
    return {
      Diglog1Demo,
      Diglog2Demo
    };
  }
};


</script>

<style lang="scss" scoped>

</style>