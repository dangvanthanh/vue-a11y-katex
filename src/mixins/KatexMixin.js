import katex from 'katex';

export default {
  props: {
    expression: {
      type: String,
      default: ''
    }
  },
  computed: {
    _expression() {
      try {
        return katex.renderToString(this.expression, { throwOnError: false });
      } catch (e) {
        return e;
      }
    }
  }
};
