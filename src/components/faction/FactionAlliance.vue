<template>
  <base-faction :faction="factionData" />
</template>

<script>
import BaseFaction from "./BaseFaction.vue";
import {Config} from "../../config/app-data";

export default {
  name: "FactionAlliance",

  data() {
    return {
      factionData: Config.factions.alliance,
    };
  },

  components: {
    BaseFaction,
  },
};
</script>

<style lang="scss" scoped>
</style>
