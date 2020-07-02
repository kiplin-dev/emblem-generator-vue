<template>
  <div>
    <div :id="uniqDivId"></div>
  </div>
</template>

<script>
import emblemDisplayer from 'emblem-generator';
import _ from 'underscore';

export default {
  name: 'EmblemDisplayer',
  props: {
    assets: Object,
    emblemData: Object,
    width: {
      type: Number,
      default: 256,
    },
    divId: {
      type: String,
      default: '',
    },
  },
  computed: {
    uniqDivId() {
      const suffix = this.divId === '' ? _.uniqueId() : this.divId;
      return `emblem-displayer-${suffix}`;
    },
  },
  mounted() {
    emblemDisplayer.init(this.uniqDivId, this.width, this.assets, 'transparent');

    if (!_.isEmpty(this.emblemData)) {
      emblemDisplayer.drawEmblemObj(this.emblemData);
    }
  },
};
</script>
