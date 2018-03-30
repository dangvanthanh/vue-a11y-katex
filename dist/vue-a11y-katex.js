(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vue-a11y-katex'] = factory());
}(this, (function () { 'use strict';

  var KatexMixin = {
    props: {
      expression: {
        type: String,
        default: ""
      }
    },
    computed: {
      _expression: function _expression() {
        try {
          return katex.renderToString(this.expression, { throwOnError: false });
        } catch (e) {
          return e;
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var InlineMath = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{domProps:{"innerHTML":_vm._s(_vm._expression)}})},staticRenderFns: [],
    name: 'InlineMath',
    mixins: [KatexMixin]
  }

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var BlockMath = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm._expression)}})},staticRenderFns: [],
    name: 'BlockMath',
    mixins: [KatexMixin]
  }

  var components = {
    InlineMath: InlineMath,
    BlockMath: BlockMath
  };

  var install = function(Vue, opts) {
    if ( opts === void 0 ) opts = {};

    Object.values(components).forEach(function (component) {
      Vue.component(component.name, component);
    });
  };

  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }

  var index = Object.assign({}, components, { install: install });

  return index;

})));
//# sourceMappingURL=vue-a11y-katex.js.map
