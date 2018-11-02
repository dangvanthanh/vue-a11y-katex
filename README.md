# Vue A11Y Katex

> Katex Accessibility Using Vue.js

![](screenshot.png)

## Requirements

```
$ npm install katex --save
```

## Install

```
$ npm install vue-a11y-katex --save
```

## Usage

You can [download Katex](https://github.com/Khan/KaTeX) and host it on your server or use from CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js" integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq" crossorigin="anonymous"></script>
```

### CDN

```html
<script src="https://unpkg.com/vue-a11y-katex"></script>
```

### .vue files

##### Import all components

```javascript
import Vue from 'vue'
import KatexMath from 'vue-a11y-katex'

Vue.use(KatexMath)
```

##### Usage

If you use `element-math` please include below script in html

```html
<script src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/contrib/auto-render.min.js" integrity="sha384-kmZOZB5ObwgQnS/DuDg6TScgOiWWBiVt0plIRkZCmE6rDZGrEOQeHM5PcHi+nyqe" crossorigin="anonymous"></script>
```

```vue
<template>
  <div class="app">
    <inline-math :expression="inlinemathExpr" />
    <block-math :expression="blockmathExpr" />
    <element-math :expression="elementmathExpr"/>
  <div>
</template>

<script>
export default {
  data () {
    return {
      inlinemathExpr: 'c = \\pm\\sqrt{a^2 + b^2}',
      blockmathExpr: 'f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi',
      elementmathExpr: `
        <span class="blue">
          Other node $$ \int_2^3 $$
        </span>
        and some <!-- comment --> more text blah. And math with a\
        $$c = \\pm\\sqrt{a^2 + b^2}$$
      `
    }
  }
}
</script>
```

## License

MIT © Dang Van Thanh <dangvanthanh@dangthanh.org>
