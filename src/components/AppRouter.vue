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
    <div class="social-links">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-reddit-alien"></i>
    </div>
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
      width: 100%;
      margin-top: 10vh;
      margin-bottom: 6vh;

      a {
        color: $text-blue;
        opacity: 0.6;
        text-decoration: none;
        text-transform: uppercase;
        padding: 16px 8px;
        margin-bottom: 4vh;
        font-size: 14px;
        letter-spacing: 2px;

        &.router-link-exact-active {
          opacity: 1;
          font-weight: bold;
          color: var(--faction-color-title);
          text-shadow: 0 0 34px currentColor;
        }
      }
    }

    .social-links {
      width: 100%;
      display: flex;
      justify-content: center;
      color: $text-blue;
      opacity: 0.6;

      .fab {
        margin-right: 24px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

  }
</style>
