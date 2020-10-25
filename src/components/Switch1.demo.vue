<demo>
常规用法
</demo>


<template>
  <GSwitch v-model:value="bool"  />
</template>

<script lang="ts">
import GSwitch from '../lib/Switch.vue';
//用户请勿使用上一句
//import {GButton,GSwitch, GDialog ,Tab,Tabs,openDialog } from "sun-uia-0.0.1";
//用户请使用这一句,代替上一句引入文件
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