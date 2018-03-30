<template>
  <span v-html="_expression"></span>
</template>

<script>
import KatexMixin from '../mixins/KatexMixin';

export default {
  name: 'InlineMath',
  mixins: [KatexMixin]
}
</script>