<template>
  <div id="emblem-generator-div">
    <div id="emblem-div">
      <p v-if="generating" id="generating"><LoaderSvg/>{{ generatingTxt }}</p>
    </div>
    <div id="options">
      <button
        class="emblem-generator-btn emblem-generator-btn-color"
        @click="randomize('all')"
        id="randomize"
      >
        {{ randomizeTxt }} 🎲
      </button>
      <div
        v-if="displayFlip"
        id="flip"
      >
        <table>
          <tr>
            <th></th>
            <th>{{ flipVerticallyTxt }}</th>
            <th>{{ flipHorizontallyTxt }}</th>
            <th>{{ randomizeTxt }}</th>
          </tr>
          <tr v-if="useBackground">
            <td>{{ backgroundTxt }}</td>
            <td>
              <input type="checkbox"
                @click="toggleFlag('FlipBackgroundVertical')"
                :checked="selectedFlags.FlipBackgroundVertical"
              >
            </td>
            <td>
              <input type="checkbox"
                @click="toggleFlag('FlipBackgroundHorizontal')"
                :checked="selectedFlags.FlipBackgroundHorizontal"
              >
            </td>
            <td>
              <button @click="randomize('background')">🎲</button>
            </td>
          </tr>
          <tr>
            <td>{{ foregroundTxt }}</td>
            <td>
              <input type="checkbox"
                @click="toggleFlag('FlipForegroundVertical')"
                :checked="selectedFlags.FlipForegroundVertical"
              >
            </td>
            <td>
              <input type="checkbox"
                @click="toggleFlag('FlipForegroundHorizontal')"
                :checked="selectedFlags.FlipForegroundHorizontal"
              >
            </td>
            <td>
              <button @click="randomize('foreground')">🎲</button>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        <button
          class="emblem-generator-btn emblem-generator-btn-color"
          v-if="useBackground"
          @click="randomize('background')"
        >
          {{ randomizeTxt }} {{ backgroundTxt }} 🎲
        </button>
        <button
          class="emblem-generator-btn emblem-generator-btn-color"
          v-if="useBackground"
          @click="randomize('foreground')"
        >
          {{ randomizeTxt }} {{ foregroundTxt }} 🎲
        </button>
      </div>
      <div id="color">
        <div id="color-buttons">
          <button
            v-for="(label, id) in colorDest"
            @click="setColorDest(id)"
            :key="`color-button-${id}`"
            :class="id === selectedColorDest ? 'selected' : ''"
            class="emblem-generator-btn emblem-generator-btn-color"
          >
            {{ label }}
          </button>
        </div>
        <div id="color-selector">
          <color-picker
            :startColor="colorPickerStartColor()"
            :width="200"
            :height="200"
            @colorChange="setColor"
          />
        </div>
      </div>
    </div>
    <div id="asset-selection">
      <div
        v-if="useBackground"
        id="background-list">
        <h3>{{ backgroundTxt }}</h3>
        <div id="background-list-items">
          <div
            v-for="(background, id) in backgroundList"
            @click="setElement('background_id', id)"
            :key="`background-${id}`"
            class="svg-selector"
            :class="id === emblem.background_id ? 'selected' : ''"
          >
            <svg width="256" height="256" >
              <path
                v-for="(path, pathId) in background.p"
                :key="`background-path-${pathId}`"
                :d="path"
                :fill="id === emblem.background_id ?
                emblemData.background_color : '#000000'"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div id="foreground-list">
        <h3>{{ foregroundTxt }}</h3>
        <div id="foreground-list-items">
          <div v-for="(foreground, id) in foregroundList"
              @click="setElement('foreground_id', id)"
              :key="`foreground-${id}`"
              class="svg-selector"
              :class="id === emblem.foreground_id ? 'selected' : ''"
          >
            <svg width="256" height="256" >
              <path v-for="(path, pathId) in foreground.p2"
                    :key="`foreground-p2-${pathId}`"
                    :d="path"
                    :fill="id === emblem.foreground_id ?
                    emblemData.foreground_primary_color : '#000000'"
              ></path>
              <path v-for="(path, pathId) in foreground.p1"
                    :key="`foreground-p1-${pathId}`"
                    :d="path"
                    :fill="id === emblem.foreground_id ?
                    emblemData.foreground_secondary_color : '#000000'"
              ></path>
              <path v-for="(path, pathId) in foreground.pt1"
                    :key="`foreground-pt1-${pathId}`"
                    :d="path"
              ></path>
              <path v-for="(path, pathId) in foreground.pto2"
                    :key="`foreground-pto2-${pathId}`"
                    :d="path"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from 'vue-color-picker-wheel';
import emblemGenerator from 'emblem-generator';
import _ from 'underscore';
import LoaderSvg from './svg/loader.vue';

export default {
  name: 'EmblemGenerator',
  props: {
    assets: Object,
    emblemData: Object,
    backgroundTxt: { type: String, default: 'Background' },
    foregroundTxt: { type: String, default: 'Foreground' },
    primaryColorTxt: { type: String, default: 'Primary Color' },
    secondaryColorTxt: { type: String, default: 'Secondary Color' },
    flipVerticallyTxt: { type: String, default: 'Flip Vertically' },
    flipHorizontallyTxt: { type: String, default: 'Flip Horizontally' },
    randomizeTxt: { type: String, default: 'Randomize' },
    generatingTxt: { type: String, default: 'Generating...' },
    displayGeneratingLoader: { type: Boolean, default: true },
    displayFlip: { type: Boolean, default: true },
    useBackground: { type: Boolean, default: true },
  },
  components: {
    ColorPicker,
    LoaderSvg,
  },
  data() {
    return {
      generating: false,
      colorDest: {
        background_color: this.backgroundTxt,
        foreground_primary_color: this.primaryColorTxt,
        foreground_secondary_color: this.secondaryColorTxt,
      },
      selectedColorDest: this.useBackground ? 'background_color' : 'foreground_primary_color',
      selectedFlags: {
        FlipBackgroundVertical: false,
        FlipBackgroundHorizontal: false,
        FlipForegroundVertical: false,
        FlipForegroundHorizontal: false,
      },
    };
  },
  computed: {
    foregroundList() {
      return this.assets.defs;
    },
    backgroundList() {
      return this.assets.bg_defs;
    },
    emblem() {
      if (_.isEmpty(this.emblemData)) {
        return {
          background_id: 0,
          foreground_id: 0,
          flags: [],
          background_color: '',
          foreground_primary_color: '',
          foreground_secondary_color: '',
        };
      }
      return this.emblemData;
    },
  },
  methods: {
    setColor(value) {
      this.setElement(this.selectedColorDest, value);
    },
    setElement(element, value) {
      this.$set(this.emblem, element, value);
      emblemGenerator.drawEmblemObj(this.emblem);
    },
    setColorDest(id) {
      this.selectedColorDest = id;
    },
    toggleFlag(id) {
      this.$set(this.selectedFlags, id, !this.selectedFlags[id]);

      this.setFlags();
    },
    setFlags() {
      const flags = [];
      _.keys(this.selectedFlags).forEach((flag) => {
        if (this.selectedFlags[flag]) {
          flags.push(flag);
        }
      });

      this.$set(this.emblem, 'flags', flags);
      emblemGenerator.drawEmblemObj(this.emblem);
    },
    randomize(element) {
      if (element === 'background') {
        this.randomizeBackground();
        if (this.displayFlip) {
          _.keys(this.selectedFlags).forEach((flag) => {
            if (flag === 'FlipBackgroundVertical' || flag === 'FlipBackgroundHorizontal') {
              if (_.random(0, 1) === 1) {
                this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
              }
            }
          });
        }
      } else if (element === 'foreground' || (element === 'all' && !this.useBackground)) {
        this.randomizeForeground();
        if (this.displayFlip) {
          _.keys(this.selectedFlags).forEach((flag) => {
            if (flag === 'FlipForegroundVertical' || flag === 'FlipForegroundHorizontal') {
              if (_.random(0, 1) === 1) {
                this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
              }
            }
          });
        }
      } else if (element === 'all') {
        this.randomizeBackground();
        this.randomizeForeground();
        if (this.displayFlip) {
          _.keys(this.selectedFlags).forEach((flag) => {
            if (_.random(0, 1) === 1) {
              this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
            }
          });
        }
      }

      const flags = [];
      _.keys(this.selectedFlags).forEach((flag) => {
        if (this.selectedFlags[flag]) {
          flags.push(flag);
        }
      });
      this.$set(this.emblemData, 'flags', flags);

      emblemGenerator.drawEmblemObj(this.emblem);
    },
    randomizeBackground() {
      const backgroundIds = _.keys(this.assets.bg_defs);
      const randomBackgroundIndex = _.random(0, backgroundIds.length - 1);
      this.$set(this.emblemData, 'background_id', backgroundIds[randomBackgroundIndex]);

      this.$set(this.emblemData, 'background_color', this.getRandomColor());
    },
    randomizeForeground() {
      const foregroundIds = _.keys(this.assets.defs);
      const randomForegroundIndex = _.random(0, foregroundIds.length - 1);
      this.$set(this.emblemData, 'foreground_id', foregroundIds[randomForegroundIndex]);

      this.$set(this.emblemData, 'foreground_primary_color', this.getRandomColor());
      this.$set(this.emblemData, 'foreground_secondary_color', this.getRandomColor());
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    colorPickerStartColor() {
      if (this.emblem[this.selectedColorDest] === '') {
        // default color
        return '#ff0000';
      }
      return this.emblem[this.selectedColorDest];
    },
  },
  mounted() {
    emblemGenerator.init('emblem-div', 256, this.assets, 'transparent');

    // display background color button
    if (!this.useBackground) {
      this.$delete(this.colorDest, 'background_color');
    }

    if (_.isEmpty(this.emblemData)) {
      if (this.displayGeneratingLoader) {
        this.generating = true;
        setTimeout(() => {
          this.generating = false;
          this.randomize('all');
        }, 2000);
      } else {
        this.randomize('all');
      }
    } else {
      // check flags checkboxes
      this.emblemData.flags.forEach((flag) => {
        this.selectedFlags[flag] = true;
      });
      // Draw emblem
      emblemGenerator.drawEmblemObj(this.emblem);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  #emblem-generator-div {
    text-align: center;
  }

  #emblem-div {
    border: 1px solid silver;
    margin:auto;
    width: 256px;
    /*position: relative;*/
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9999;
    background-color: #fff;
  }

  #generating {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30%;
    transform: translateX(-50%);
    left: 50%;
  }

  #asset-selection {
    align-items: start;
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }

  #background-list, #foreground-list {
    width: 100%;
  }

  #background-list-items, #foreground-list-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 250px;
    overflow: scroll;
  }

  #color-buttons{
    button.selected {
      font-weight: bold;
      color: #42b983;
    }
  }

  #options {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #flip {
    display: flex;
    justify-content: center;
    padding-top: 20px;

    table, tr, td, th {
      border: 1px solid silver;
      padding: 5px;
      border-spacing : 0;
      border-collapse : collapse
    }
  }

  #color-list {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }

  #color-selector {
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }

  .svg-selector {
    border: 1px solid silver;
    width: 64px;
    height: 64px;

    &.selected {
      border: 1px solid red;
    }

    svg {
      transform: scale(0.25) translate(-150%, -150%);
    }
  }

  .emblem-generator-btn {
    width: 200px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 8px 18px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    #options {
      flex-direction: column;
    }

    #randomize {
      margin-top: 10px;
    }

    #color {
      margin-top: 10px;
    }

    #color-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #color-selector {
      margin-top: 5px;
    }
  }
</style>
