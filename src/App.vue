<template>
  <div id="app">
    <game-component />
  </div>
</template>

<script>
import GameComponent from './components/Game/GameComponent';

export default {
  name: 'App',
  components: {
    GameComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
  margin-top: 60px;
}
</style>
