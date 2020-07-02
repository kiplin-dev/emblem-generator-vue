import EmblemGenerator from './src/components/EmblemGenerator.vue';
import EmblemDisplayer from './src/components/EmblemDisplayer.vue';

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.component('emblem-generator', EmblemGenerator);
    Vue.component('emblem-displayer', EmblemDisplayer);
  },
};

export { EmblemGenerator, EmblemDisplayer };
