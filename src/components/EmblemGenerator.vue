<template>
  <div id="emblem-generator-div">
    <div id="emblem-div">
      <p v-if="generating" id="generating"><LoaderSvg/>{{ generatingTxt }}</p>
    </div>
    <div id="options">
      <button id="randomize" @click="randomize('all')">
        {{ randomizeTxt }} 🎲
      </button>
      <div id="flip">
        <table>
          <tr>
            <th></th>
            <th>{{ flipVerticallyTxt }}</th>
            <th>{{ flipHorizontallyTxt }}</th>
            <th>{{ randomizeTxt }}</th>
          </tr>
          <tr>
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
      <div id="color-list">
        <div id="color-list-buttons">
          <button v-for="(label, id) in colorDest"
             @click="setColorDest(id)"
             :key="`color-button-${id}`"
             :class="id === selectedColorDest ? 'selected' : ''"
          >
            {{ label }}
          </button>
        </div>
        <div id="color-list-selector">
          <div v-for="(color, id) in colorList"
               @click="setElement(selectedColorDest, id)"
               :key="`color-${id}`"
               :style="{'background-color': color}"
               class="color-selector"
          ></div>
        </div>
      </div>
    </div>
    <div id="asset-selection">
      <div id="background-list">
        <h3>{{ backgroundTxt }}</h3>
        <div id="background-list-items">
          <div v-for="(background, id) in backgroundList"
               @click="setElement('background_id', id)"
               :key="`background-${id}`"
               class="svg-selector"
               :class="id === emblem.background_id ? 'selected' : ''"
          >
            <svg width="256" height="256" >
              <path v-for="(path, pathId) in background.p"
                    :key="`background-path-${pathId}`"
                    :d="path"
                    :fill="id === emblem.background_id ?
                    getSelectedColor('background_color_id') : '#000000'"
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
                    getSelectedColor('foreground_primary_color_id') : '#000000'"
              ></path>
              <path v-for="(path, pathId) in foreground.p1"
                    :key="`foreground-p1-${pathId}`"
                    :d="path"
                    :fill="id === emblem.foreground_id ?
                    getSelectedColor('foreground_secondary_color_id') : '#000000'"
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
  },
  components: {
    LoaderSvg,
  },
  data() {
    return {
      generating: false,
      colorDest: {
        background_color_id: this.backgroundTxt,
        foreground_primary_color_id: this.primaryColorTxt,
        foreground_secondary_color_id: this.secondaryColorTxt,
      },
      selectedColorDest: 'background_color_id',
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
    colorList() {
      return this.assets.color_defs;
    },
    emblem() {
      if (_.isEmpty(this.emblemData)) {
        return {
          background_id: 0,
          foreground_id: 0,
          flags: [],
          background_color_id: 0,
          foreground_primary_color_id: 0,
          foreground_secondary_color_id: 0,
        };
      }
      return this.emblemData;
    },
  },
  methods: {
    setElement(element, id) {
      this.$set(this.emblem, element, id);
      emblemGenerator.drawEmblemObj(this.emblem);
    },
    setColorDest(id) {
      this.selectedColorDest = id;
    },
    getSelectedColor(item) {
      return this.assets.color_defs[this.emblem[item]];
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
        _.keys(this.selectedFlags).forEach((flag) => {
          if (flag === 'FlipBackgroundVertical' || flag === 'FlipBackgroundHorizontal') {
            if (_.random(0, 1) === 1) {
              this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
            }
          }
        });
      } else if (element === 'foreground') {
        this.randomizeForeground();
        _.keys(this.selectedFlags).forEach((flag) => {
          if (flag === 'FlipForegroundVertical' || flag === 'FlipForegroundHorizontal') {
            if (_.random(0, 1) === 1) {
              this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
            }
          }
        });
      } else if (element === 'all') {
        this.randomizeBackground();
        this.randomizeForeground();
        _.keys(this.selectedFlags).forEach((flag) => {
          if (_.random(0, 1) === 1) {
            this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
          }
        });
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

      const colorIds = _.keys(this.assets.color_defs);
      const randomBackgroundColorIndex = _.random(0, colorIds.length - 1);
      this.$set(this.emblemData, 'background_color_id', colorIds[randomBackgroundColorIndex]);
    },
    randomizeForeground() {
      const foregroundIds = _.keys(this.assets.defs);
      const randomForegroundIndex = _.random(0, foregroundIds.length - 1);
      this.$set(this.emblemData, 'foreground_id', foregroundIds[randomForegroundIndex]);

      const colorIds = _.keys(this.assets.color_defs);
      const randomForegroundPrimaryColorIndex = _.random(0, colorIds.length - 1);
      const randomForegroundSecondaryColorIndex = _.random(0, colorIds.length - 1);
      this.$set(this.emblemData, 'foreground_primary_color_id', colorIds[randomForegroundPrimaryColorIndex]);
      this.$set(this.emblemData, 'foreground_secondary_color_id', colorIds[randomForegroundSecondaryColorIndex]);
    },
  },
  mounted() {
    emblemGenerator.init('emblem-div', 256, this.assets, 'transparent');

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
    position: relative;
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
    width: 50%;
  }

  #background-list-items, #foreground-list-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 250px;
    overflow: scroll;
  }

  #color-list-buttons{
    button.selected {
      font-weight: bold;
      color: #42b983;
    }
  }

  #options {
    display: flex;
    align-items: center;
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

  #color-list-selector {
    display: flex;
    flex-wrap: wrap;
    max-height: 100px;
    overflow: scroll;
    padding: 0 20px;
  }

  .color-selector {
    width: 25px;
    height: 25px;
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

  @media screen and (max-width: 900px) {
    #options {
      flex-direction: column;
    }

    #randomize {
      margin-top: 10px;
    }

    #color-list {
      margin-top: 10px;
    }

    #color-list-selector {
      margin-top: 5px;
    }
  }
</style>
