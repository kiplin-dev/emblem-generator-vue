<template>
  <div id="app">
    <button @click="toggleEdit">{{ edit ? "Save" : "Edit" }}</button>
    <div v-if="!edit">
      <EmblemDisplayer
        :assets="assets"
        :emblemData="emblemData"
        :width=64
      ></EmblemDisplayer>
      <textarea name="test" id="" cols="30" rows="10" v-model="emblemDataTxt">
      </textarea>
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
        @sendEmblemDataToParent="getDataFromGenerator"
      ></EmblemGenerator>
    </div>
  </div>
</template>

<script>
import EmblemGenerator from './components/EmblemGenerator.vue';
import EmblemDisplayer from './components/EmblemDisplayer.vue';
import assets from './customAssets';
import colors from './customColors';

export default {
  name: 'App',
  data() {
    return {
      edit: false,
      assets: {
        defs: assets.defs,
        bg_defs: assets.bg_defs,
        color_defs: colors,
      },
      emblemData: {},
    };
  },
  components: {
    EmblemGenerator,
    EmblemDisplayer,
  },
  computed: {
    emblemDataTxt() {
      return JSON.stringify(this.emblemData);
    },
  },
  methods: {
    getDataFromGenerator(data) {
      this.emblemData = data;
    },
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
</style>
