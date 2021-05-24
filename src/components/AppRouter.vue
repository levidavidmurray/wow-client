<template>
  <div class="app-router">
    <div class="bfa">
      <img src="../assets/wow-bfa.png" alt="World of Warcraft - Battle for Azeroth">
    </div>
    <div class="app-links">
      <router-link to="/">Home</router-link>
      <router-link to="/horde">Horde</router-link>
      <router-link to="/alliance">Alliance</router-link>
      <router-link to="/media">Media</router-link>
      <router-link to="/trailer">Trailer</router-link>
    </div>
    <i class="fab fa-reddit-alien"></i>
    <i class="fab fa-twitter"></i>
  </div>
</template>

<script>
export default {
  name: 'AppRouter',
}
</script>

<style scoped lang="scss">
  @import "../scss/variables";

  .app-router {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .bfa {
      img {
        width: 100%;
      }
    }

    .app-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex-grow: 1;
      padding: 12vh 0;

      a {
        color: $text-blue;
        opacity: 0.6;
        text-decoration: none;
        text-transform: uppercase;

        &.router-link-exact-active {
          opacity: 1;
          font-weight: bold;
          text-shadow: 0 0 34px currentColor;
        }
      }
    }

  }
</style>
