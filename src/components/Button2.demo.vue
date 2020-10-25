<demo>
不同尺寸按钮
</demo>


<template>
  <div>
    <GButton size="big">
      大型按钮
    </GButton>
    <GButton>
      默认按钮
    </GButton>
    <GButton size="small">
      小型按钮
    </GButton>
  </div>
</template>

<script lang="ts">
import GButton from '../lib/GButton.vue';


export default {
  components: {GButton}
};
</script>

<style lang="scss" scoped>

</style>