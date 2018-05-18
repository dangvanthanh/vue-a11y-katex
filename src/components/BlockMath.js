import KatexMixin from '../mixins/KatexMixin';

export default {
  name: 'BlockMath',
  mixins: [KatexMixin],
  render(h) {
    return h('div', {
      domProps: {
        innerHTML: this._expression
      }
    });
  }
};
