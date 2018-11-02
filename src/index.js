import InlineMath from './components/InlineMath';
import BlockMath from './components/BlockMath';
import ElementMath from './components/ElementMath';

const components = {
  InlineMath,
  BlockMath,
  ElementMath
};

const install = function(Vue, opts = {}) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign({}, components, { install });
