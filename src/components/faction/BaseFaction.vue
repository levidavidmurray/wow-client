<template>
  <div class="faction">
    <div class="hero-image" :style="{width: faction.imageWidth}">
      <div class="bg-radial" :style="{left: faction.imageLeft}"></div>
      <img class="hero-img" :style="{left: faction.imageLeft, bottom: faction.imageBottom}" :src="faction.heroImage" :alt="faction.imageAlt">
    </div>
    <div class="hero-profile">
      <img class="faction-img" :src="faction.factionImage">
      <div class="name">
        <h3>{{ faction.firstName }}</h3>
        <h3>{{ faction.lastName }}</h3>
      </div>
      <h4 class="title">{{ faction.title }}</h4>
      <p class="description">{{ faction.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFaction',

  props: {
      faction: Object,
  },

  mounted() {
    const root = document.documentElement;

    root.style.setProperty('--faction-color-radial', this.faction.colorRadial);
    root.style.setProperty('--faction-color-title', this.faction.colorTitle);
  },

  computed: {
    heroImageStyles() {
      return {
        width: this.faction.imageWidth,
        bottom: this.faction.imageBottom,
      }
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../scss/variables";

.faction {
  display: flex;
  height: 100%;
  position: relative;

  .hero-img {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .hero-image {
    position: absolute;
    height: 100%;

    .bg-radial {
      position: absolute;
      background: radial-gradient(50% 60% at 45% 50%, var(--faction-color-radial) 0, rgba(35, 52, 78, 0) 90%);
      height: 100vh;
      z-index: 0;
      opacity: 0.5;
      top: -64px;
      width: 100%;
    }
  }

  .faction-img {
    position: absolute;
    width: 128px;
    left: -156px;
    top: -16px;
    z-index: 0;
    opacity: 0.1;
  }

  .hero-profile {
    margin-left: 632px;
    margin-top: 200px;
    width: 500px;
    text-align: left;
    position: relative;
    z-index: 1;

    .name {
      h3 {
        margin: 0;
        font-size: 48px;
      }
    }

    .title {
      margin-bottom: 56px;
      color: var(--faction-color-title);
    }

    .description {
      line-height: 1.8em;
    }
  }
}

</style>
