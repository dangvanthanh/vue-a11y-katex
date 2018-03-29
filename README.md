# Vue A11Y Katex

> Katex Accessibility Using Vue.js

![](screenshot.png)

## Install

```
$ npm install vue-a11y-katex --save
```

## Usage

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
import { InlineMath, BlockMath } from 'vue-a11y-katex'

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
