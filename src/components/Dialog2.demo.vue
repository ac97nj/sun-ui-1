<demo>
一键打开 Dialog
</demo>

<template>
  <div>
    <GButton @click="showDialog">toggle</GButton>
  </div>
</template>

<script lang="ts">
import GDialog from '../lib/GDialog.vue';
import GButton from '../lib/GButton.vue';
import {h} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'Diglog1Demo',
  components: {GButton, GDialog},
  setup() {
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
    return {showDialog};
  }
};


</script>

<style lang="scss" scoped>

</style>