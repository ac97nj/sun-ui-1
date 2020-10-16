<template>
  <div>
    <GButton
        @click="onclick"
        @focus="onclick"
        @mouseover="onclick"
    >
      按钮
    </GButton>
  </div>
</template>

<script lang="ts">

import GButton from '../lib/GButton.vue';

export default {
  name: 'buttonDome',
  components: {GButton},
  setup() {
    const onclick = () => {
      console.log('hai');
    };
    return {onclick};

  }

};


</script>

<style lang="scss" scoped>


</style>