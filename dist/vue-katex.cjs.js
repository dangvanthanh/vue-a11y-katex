'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var katex = _interopDefault(require('katex'));

var KatexMixin = {
  props: {
    expression: {
      type: String,
      default: ''
    }
  },
  computed: {
    _expression: function _expression() {
      try {
        return katex.renderToString(this.expression, {
          throwOnError: false
        });
      } catch (e) {
        return e;
      }
    }
  }
};

var InlineMath = {
  name: 'InlineMath',
  mixins: [KatexMixin],
  render: function render(h) {
    return h('span', {
      domProps: {
        innerHTML: this._expression
      }
    });
  }
};

var BlockMath = {
  name: 'BlockMath',
  mixins: [KatexMixin],
  render: function render(h) {
    return h('div', {
      domProps: {
        innerHTML: this._expression
      }
    });
  }
};

var components = {
  InlineMath: InlineMath,
  BlockMath: BlockMath
};

var install = function install(Vue) {
  Object.values(components).forEach(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = Object.assign({}, components, {
  install: install
});

exports.default = index;
