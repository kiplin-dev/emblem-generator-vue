<template>
  <div>
    <div id="emblem-displayer-div"></div>
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
    width: Number,
  },
  mounted() {
    emblemDisplayer.init('emblem-displayer-div', this.width || 256, this.assets, 'transparent');

    if (!_.isEmpty(this.emblemData)) {
      emblemDisplayer.drawEmblemObj(this.emblemData);
    }
  },
};
</script>
