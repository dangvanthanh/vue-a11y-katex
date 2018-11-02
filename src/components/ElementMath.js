export default {
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
  mounted() {
    try {
      renderMathInElement(document.getElementById(this.id), {});
    } catch (e) {}
  },
  render(h) {
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
