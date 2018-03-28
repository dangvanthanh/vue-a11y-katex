<template>
  <div v-html="_expression"></div>
</template>

<script>
export default {
  name: 'BlockMath',
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