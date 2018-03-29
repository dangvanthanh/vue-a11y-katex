<template>
  <div v-html="_expression"></div>
</template>

<script>
import KatexMixin from '../mixins/KatexMixin'

export default {
  name: 'BlockMath',
  mixins: [KatexMixin]
}
</script>