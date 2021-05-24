<template>
  <base-faction :faction="factionData" />
</template>

<script>
import BaseFaction from "./BaseFaction.vue";
import {Config} from "../../config/app-data";

export default {
  name: "FactionHorde",

  data() {
    return {
      factionData: Config.factions.horde,
    };
  },

  components: {
    BaseFaction,
  },
};
</script>

<style lang="scss" scoped>
</style>
