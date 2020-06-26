<template>
  <div id="app">
    <EmblemGenerator :assets="assets"></EmblemGenerator>
  </div>
</template>

<script>
import EmblemGenerator from './components/EmblemGenerator.vue';
import assets from './customAssets';
import colors from './customColors';

export default {
  name: 'App',
  data() {
    return {
      assets: {
        defs: assets.defs,
        bg_defs: assets.bg_defs,
        color_defs: colors,
      },
    };
  },
  components: {
    EmblemGenerator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
