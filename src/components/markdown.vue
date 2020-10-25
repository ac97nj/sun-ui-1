<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">



export default {
  name: 'intro',
  props: {
    content: {
      type: String,
      required: true
    }
  },

};
</script>
