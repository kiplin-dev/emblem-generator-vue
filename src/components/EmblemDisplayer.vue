<template>
  <div>
    <div :id="uniqDivId"></div>
  </div>
</template>

<script>
import EmblemDisplayer from 'emblem-generator';
import _ from 'underscore';

const emblemDisplayer = new EmblemDisplayer();

export default {
  name: 'EmblemDisplayer',
  props: {
    assets: { type: Object, default: () => {} },
    emblemData: { type: Object, default: () => {} },
    size: { type: Number, default: 256 },
    divId: { type: String, default: '' },
  },
  computed: {
    uniqDivId() {
      const suffix = this.divId === '' ? _.uniqueId() : this.divId;
      return `emblem-displayer-${suffix}`;
    },
  },
  mounted() {
    emblemDisplayer.init(this.uniqDivId, this.size, this.assets, 'transparent');

    if (!_.isEmpty(this.emblemData)) {
      emblemDisplayer.drawEmblemObj(this.emblemData);
    }
  },
  watch: {
    emblemData: {
      deep: true,
      handler() {
        emblemDisplayer.drawEmblemObj(this.emblemData);
      },
    },
  },
};
</script>
