import KatexMixin from '../mixins/KatexMixin';

export default {
  name: 'InlineMath',
  mixins: [KatexMixin],
  render(h) {
    return h('span', {
      domProps: {
        innerHTML: this._expression
      }
    });
  }
};
