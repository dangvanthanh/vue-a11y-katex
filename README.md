# vue-a11y-katex

> Katex Accessibility Using Vue.js

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

```vue
<template>
  <div class="app">
    <inline-math :expression="inlinemathExpr"/>
    <block-math :expression="blockmathExpr"/>
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
      inlinemathExpr: '',
      blockmathExpr: ''
    }
  }
}
</script>
```

## License

MIT © Dang Van Thanh <dangvanthanh@dangthanh.org>
