<template>
  <svg class="icon">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script lang="ts">
import '../assets/Svg.js'

export default {
  name: 'IconOne',
  props: {
    icon: {
      type: String
    }
  }
};


</script>

<style lang="scss" scoped>
.icon {
  //width: 1em;
  //height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>