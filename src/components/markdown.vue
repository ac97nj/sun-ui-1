<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  name: 'intro',
  props: {
    path: {
      type: String
    }
  },
  setup(props) {
    const content = ref(null);
    import(props.path).then(
        result => content.value = result.default
    );
    return { content }
  }

};
</script>
