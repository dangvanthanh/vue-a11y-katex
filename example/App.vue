<template>
  <div id="app" class="app">
    <h1>Katex with Vue.js</h1>
    <h2>Inline Math</h2>
    <div>
      Fast and print quality the expression <inline-math :expression="inlinemathExpr" />
    </div>
    <h2>Block Math</h2>
    <div>
      Self contained and server side rendering the expression <block-math :expression="blockmathExpr" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inlinemathExpr: 'c = \\pm\\sqrt{a^2 + b^2}',
      blockmathExpr: 'f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi'
    }
  }
}
</script>

<style scoped>
.app {
  width: 40em;
  margin: 0 auto;
}
</style>

