<template>
  <div>
    <div id="emblem-div"></div>
    <div id="asset-selection">
      <div id="options">
        <input type="checkbox"
               @click="toggleFlag('FlipBackgroundVertical')"
               :checked="selectedFlags.FlipBackgroundVertical"
        > flip background vertical
        <input type="checkbox"
               @click="toggleFlag('FlipBackgroundHorizontal')"
               :checked="selectedFlags.FlipBackgroundHorizontal"
        > flip background horizontal
        <input type="checkbox"
               @click="toggleFlag('FlipForegroundVertical')"
               :checked="selectedFlags.FlipForegroundVertical"
        > flip foreground vertical
        <input type="checkbox"
               @click="toggleFlag('FlipForegroundHorizontal')"
               :checked="selectedFlags.FlipForegroundHorizontal"
        > flip foreground horizontal
      </div>
      <button @click="randomize">Randomize</button>
      <div id="color-list">
        <div id="color-list-buttons">
          <p v-for="(label, id) in colorDest"
                  @click="setColorDest(id)"
                  :key="`color-button-${id}`"
                  :class="id === selectedColorDest ? 'selected' : ''"
          >
            {{ label }}
          </p>
        </div>
        <div v-for="(color, id) in colorList"
             @click="setElement(selectedColorDest, id)"
             :key="`color-${id}`"
             :style="{'background-color': color}"
             class="color-selector"
        ></div>
      </div>
      <div id="emblem-list">
        <div v-for="(foreground, id) in emblemList"
             @click="setElement('foreground_id', id)"
             :key="`emblem-${id}`"
             class="svg-selector"
             :class="id === emblem.foreground_id ? 'selected' : ''"
        >
          <svg width="256" height="256" >
            <path v-for="(path, pathId) in foreground.p2"
                  :key="`emblem-p2-${pathId}`"
                  :d="path"
                  :fill="id === emblem.foreground_id ?
                    getSelectedColor('foreground_primary_color_id') : '#000000'"
            ></path>
            <path v-for="(path, pathId) in foreground.p1"
                  :key="`emblem-p1-${pathId}`"
                  :d="path"
                  :fill="id === emblem.foreground_id ?
                    getSelectedColor('foreground_secondary_color_id') : '#000000'"
            ></path>
            <path v-for="(path, pathId) in foreground.pt1"
                  :key="`emblem-pt1-${pathId}`"
                  :d="path"
            ></path>
            <path v-for="(path, pathId) in foreground.pto2"
                  :key="`emblem-pto2-${pathId}`"
                  :d="path"
            ></path>
          </svg>
        </div>
      </div>
      <div id="background-list">
        <div v-for="(background, id) in backgroundList"
             @click="setElement('background_id', id)"
             :key="`background-${id}`"
             class="svg-selector"
             :class="id === emblem.background_id ? 'selected' : ''"
        >
          <svg width="256" height="256" >
            <path
              :d="background.p"
              :fill="id === emblem.background_id ?
                getSelectedColor('background_color_id') : '#000000'"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emblemGenerator from 'emblem-generator';
import _ from 'underscore';

export default {
  name: 'EmblemGenerator',
  props: {
    assets: Object,
  },
  data() {
    return {
      emblem: {
        background_id: '',
        foreground_id: '',
        flags: [],
        background_color_id: 0,
        foreground_primary_color_id: 0,
        foreground_secondary_color_id: 0,
      },
      colorDest: {
        background_color_id: 'Background',
        foreground_primary_color_id: 'Couleur primaire',
        foreground_secondary_color_id: 'Couleur secondaire',
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
    emblemList() {
      return this.assets.defs;
    },
    backgroundList() {
      return this.assets.bg_defs;
    },
    colorList() {
      return this.assets.color_defs;
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
    randomize() {
      const emblemIds = _.keys(this.assets.defs);
      const randomEmblemIndex = _.random(0, emblemIds.length - 1);

      const backgroundIds = _.keys(this.assets.bg_defs);
      const randomBackgroundIndex = _.random(0, backgroundIds.length - 1);

      const colorIds = _.keys(this.assets.color_defs);
      const randomBackgroundColorIndex = _.random(0, colorIds.length - 1);
      const randomForegroundPrimaryColorIndex = _.random(0, colorIds.length - 1);
      const randomForegroundSecondaryColorIndex = _.random(0, colorIds.length - 1);

      _.keys(this.selectedFlags).forEach((flag) => {
        if (_.random(0, 1) === 1) {
          this.$set(this.selectedFlags, flag, !this.selectedFlags[flag]);
        }
      });

      const flags = [];
      _.keys(this.selectedFlags).forEach((flag) => {
        if (this.selectedFlags[flag]) {
          flags.push(flag);
        }
      });

      const defaultEmblem = {
        background_id: backgroundIds[randomBackgroundIndex],
        foreground_id: emblemIds[randomEmblemIndex],
        flags,
        background_color_id: colorIds[randomBackgroundColorIndex],
        foreground_primary_color_id: colorIds[randomForegroundPrimaryColorIndex],
        foreground_secondary_color_id: colorIds[randomForegroundSecondaryColorIndex],
      };

      this.emblem = defaultEmblem;

      emblemGenerator.drawEmblemObj(this.emblem);
    },
  },
  mounted() {
    emblemGenerator.init('emblem-div', 256, this.assets, 'transparent');

    this.randomize();
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

  #asset-selection {
    display: flex;
    justify-content: space-evenly;
  }

  #color-list-buttons{
    p.selected {
      background-color: wheat;
    }
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
</style>
