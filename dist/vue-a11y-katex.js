(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-a11y-katex'] = factory());
}(this, (function () { 'use strict';

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




var KatexMath = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm._expression)}})},staticRenderFns: [],
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

return KatexMath;

})));
//# sourceMappingURL=vue-a11y-katex.js.map
