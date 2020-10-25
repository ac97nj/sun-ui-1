<demo>
常规使用
</demo>

<template>
  <div>
    <GDialog :visible="toggleValue"
             @update:visible="toggleValue = $event"
             :closeOnClickOverlay="false"
             :fnOK="f1"
             fnCancel="f2">
      <template v-slot:title>
        <strong>自定义标题</strong>
      </template>
      <template v-slot:content>
        <strong>自定义内容</strong>
        <p>自定义内容</p>
      </template>
    </GDialog>
    <GButton @click="toggle">toggle</GButton>
  </div>
</template>

<script lang="ts">
import GDialog from '../lib/GDialog.vue';
import GButton from '../lib/GButton.vue';
import {ref} from 'vue';

export default {
  name: 'Diglog1Demo',
  components: {GButton, GDialog},
  setup() {
    const toggleValue = ref(false);
    const toggle = () => {
      toggleValue.value = !toggleValue.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {toggleValue, toggle, f1, f2,};
  }
};


</script>

<style lang="scss" scoped>

</style>