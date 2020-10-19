<template>
  <div>
    <div>Diglog例子一</div>
    <h1>one</h1>
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
      </template>
    </GDialog>
    <GButton @click="toggle">toggle</GButton>
  </div>


  <div>
    <div>例子二</div>
    <GButton @click="showDialog">toggle</GButton>

  </div>

</template>

<script lang="ts">
import {ref, h} from 'vue';
import GDialog from '../lib/GDialog.vue';
import GButton from '../lib/GButton.vue';
import {openDialog} from '../lib/openDialog.ts';

export default {
  name: 'DiaLogDome',
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };


    return {toggleValue, toggle, f1, f2, showDialog};
  }


};


</script>

<style lang="scss" scoped>

</style>