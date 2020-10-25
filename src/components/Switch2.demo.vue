<demo>
支持禁用
</demo>

<template>
  <GSwitch v-model:value="bool" disabled/>
</template>

<script lang="ts">
import GSwitch from '../lib/Switch.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    GSwitch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>