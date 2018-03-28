(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-a11y-katex'] = factory());
}(this, (function () { 'use strict';

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




var InlineMath = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{domProps:{"innerHTML":_vm._s(_vm._expression)}})},staticRenderFns: [],
  name: 'InlineMath',
  props: {
    expression: {
      type: String,
      default: ''
    }
  },
  computed: {
    _expression: function _expression () {
      try {
	      return katex.renderToString(this.expression, { throwOnError: false })
      } catch (e) {
	      return e
      }
    }
  }
}

InlineMath.install = function (Vue) {
  Vue.component(InlineMath.name, InlineMath);
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




var BlockMath = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm._expression)}})},staticRenderFns: [],
  name: 'BlockMath',
  props: {
    expression: {
      type: String,
      default: ''
    }
  },
  computed: {
    _expression: function _expression () {
      try {
	      return katex.renderToString(this.expression, { throwOnError: false })
      } catch (e) {
	      return e
      }
    }
  }
}

BlockMath.install = function (Vue) {
  Vue.component(BlockMath.name, BlockMath);
};

var components = {
  InlineMath: InlineMath,
  BlockMath: BlockMath
};

function install (Vue) {
  for (var item in components) {
    if (components[item].name) {
      Vue.components(components[item].name, components[item]);
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

return components;

})));
//# sourceMappingURL=vue-a11y-katex.js.map
