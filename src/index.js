import InlineMath from './components/InlineMath.vue'
import BlockMath from './components/BlockMath.vue'

const components = {
  InlineMath,
  BlockMath
}

const install = function (Vue, opts = {}) {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({}, components, { install })