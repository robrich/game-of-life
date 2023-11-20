<script setup>
import { computed } from 'vue';
import GameRow from './GameRow.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
});

const cells = computed(() => [...Array(props.height).keys()]);
function getCells(y) {
  return (props.data ?? []).filter(c => c.y === y) ?? [];
}
</script>

<template>
  <table>
    <tbody>
      <GameRow v-for="y in cells" :key="y" :id="'y'+y" :data="getCells(y)" :width="props.width" />
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: auto;
  width: 400px;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 1pt;
}
tr {
  height: 20px;
}
</style>
