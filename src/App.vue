<template>
  <div id="app">
    <button
      @click="toggleEdit"
      class="emblem-generator-btn emblem-generator-btn-color"
    >
      {{ edit ? "Close" : "Edit" }}
    </button>
    <div v-if="!edit">
      <EmblemDisplayer
        :assets="assets"
        :emblemData="emblemData"
        :width=256
        divId="demo"
      ></EmblemDisplayer>
      <p v-if="Object.keys(emblemData).length === 0">Click "Edit" to generate a new Emblem!</p>
    </div>
    <div v-else>
      <EmblemGenerator
        :assets="assets"
        :emblemData="emblemData"
        backgroundTxt="Fond"
        foregroundTxt="Logo"
        primaryColorTxt="Couleur primaire"
        secondaryColorTxt="Couleur secondaire"
        flipVerticallyTxt="Retourner verticalement"
        flipHorizontallyTxt="Retourner horizontalement"
        randomizeTxt="Aléatoire"
        :displayFlip="true"
        :useBackground="true"
      ></EmblemGenerator>
    </div>
  </div>
</template>

<script>
import EmblemGenerator from './components/EmblemGenerator.vue';
import EmblemDisplayer from './components/EmblemDisplayer.vue';
import assets from './customAssets';
import './css/kiplin-theme.css';

export default {
  name: 'App',
  data() {
    return {
      edit: false,
      assets: {
        defs: assets.defs,
        bg_defs: assets.bg_defs,
      },
      emblemData: {},
    };
  },
  components: {
    EmblemGenerator,
    EmblemDisplayer,
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
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

#emblem-displayer-demo svg {
  border: 1px solid silver;
}

.emblem-generator-btn {
  width: 200px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 8px 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
