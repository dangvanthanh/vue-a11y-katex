<template>
  <span v-html="_expression"></span>
</template>

<script>
export default {
  name: 'InlineMath',
  props: {
    expression: {
      type: String,
      default: ''
    }
  },
  computed: {
    _expression () {
      try {
	      return katex.renderToString(this.expression, { throwOnError: false })
      } catch (e) {
	      return e
      }
    }
  }
}
</script>