import Vue from 'vue';
import App from './App.vue';
import VueKatex from '../src/';
import '../node_modules/katex/dist/katex.min.css';

Vue.use(VueKatex);

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
