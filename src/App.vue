<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useInterval } from './hooks/useInterval.js';
import turn from './services/turn.js';
import GameBoard from './components/GameBoard.vue';
import buildRandomBoard from './buildRandomBoard.js';

const width = ref(20);
const height = ref(20);
const maxPieces = 100;
const data = ref(buildRandomBoard(width.value, height.value, maxPieces));

const { stopInterval, startInterval } = useInterval(() => {
  data.value = turn(data.value, width.value, height.value);
});
onMounted(() => startInterval(500)); // ms
onBeforeUnmount(() => stopInterval());

function start() {
  startInterval(500);
}
function stop() {
  stopInterval();
}
function reset() {
  data.value = buildRandomBoard(width.value, height.value, maxPieces);
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <div class="center">
    <div>
      <button @click.prevent="start">Play</button>
      <button @click.prevent="stop">Pause</button>
      <button @click.prevent="reset">Regenerate</button>
    </div>
    <div>
      <label for="max">Max alive cells</label>
      <input type="number" v-model="maxPieces" style="width: 50px" />
    </div>
  </div>

  <GameBoard :width="width" :height="height" :data="data" />

</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
