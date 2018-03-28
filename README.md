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
    <katex-math :expression="expr"/>
  <div>
</template>

<script>
import KatexMath from 'vue-a11y-katex'

export default {
  components: {
    KatexMath
  },
  data () {
    return {
      expr: ''
    }
  }
}
</script>
```

## License

MIT © Dang Van Thanh <dangvanthanh@dangthanh.org>
