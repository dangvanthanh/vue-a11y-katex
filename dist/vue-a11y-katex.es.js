import katex from 'katex';

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

var ElementMath = {
  name: 'ElementMath',
  props: {
    id: {
      type: String,
      default: String(Date.now())
    },
    expression: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    try {
      renderMathInElement(document.getElementById(this.id), {});
    } catch (e) {}
  },
  render: function render(h) {
    return h('div', {
      attrs: {
        id: this.id
      },
      domProps: {
        innerHTML: this.expression
      }
    });
  }
};

var components = {
  InlineMath: InlineMath,
  BlockMath: BlockMath,
  ElementMath: ElementMath
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

export default index;
