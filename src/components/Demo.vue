<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <GButton @click="showCode " v-if="!codeVisible">查看代码</GButton>
      <GButton @click="hideCode " v-else>隐藏代码</GButton>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>

  </div>
</template>

<script lang="ts">

import GButton from '../lib/GButton.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {
  computed,
  ref
} from 'vue';


const Prism = (window as any).Prism;


export default {
  name: 'Demo',
  props: {
    component: Object
  },

  components: {
    GButton,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false);
    const showCode = () => { codeVisible.value = true; };
    const hideCode = () => { codeVisible.value = false; };

    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode
    };
  }
};


</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}


</style>