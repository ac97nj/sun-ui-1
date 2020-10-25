<demo>
禁用按钮
</demo>


<template>
  <div>
    <GButton disabled>
      禁用按钮
    </GButton>

    <GButton theme="link" disabled>
      禁用链接按钮
    </GButton>

    <GButton theme="text" disabled>
      禁用文字按钮
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