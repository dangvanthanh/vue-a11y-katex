import InlineMath from './components/InlineMath'
import BlockMath from './components/BlockMath'

const components = {
  InlineMath,
  BlockMath
}

function install (Vue) {
  for (const item in components) {
    if (components[item].name) {
      Vue.components(components[item].name, components[item])
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default components