# Vue A11Y Katex

> Katex Accessibility Using Vue.js

![](screenshot.png)

## Install

```
$ npm install vue-a11y-katex --save
```

## Usage

You can [download Katex]() and host it on your server or use from CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js" integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq" crossorigin="anonymous"></script>
```

### CDN

```html
<script src="https://unpkg.com/vue-a11y-katex"></script>
```

### .vue files

Import all components

```vue
import Vue from 'vue'
import KatexMath from 'vue-a11y-katex'

Vue.use(KatexMath)
```

```vue
<template>
  <div class="app">
    <inline-math :expression="inlinemathExpr" />
    <block-math :expression="blockmathExpr" />
  <div>
</template>

<script>
import InlineMath from 'vue-a11y-katex/src/components/InlineMath.vue'
import BlockMath from 'vue-a11y-katex/src/components/BlockMath.vue'

export default {
  components: {
    InlineMath,
    BlockMath
  },
  data () {
    return {
      inlinemathExpr: 'c = \\pm\\sqrt{a^2 + b^2}',
      blockmathExpr: 'f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi'
    }
  }
}
</script>
```

## License

MIT © Dang Van Thanh <dangvanthanh@dangthanh.org>
