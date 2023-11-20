<script setup>
import { computed } from 'vue';
import GameCell from './GameCell.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

const cells = computed(() => [...Array(props.width).keys()]);
function getCell(x) {
  return (props.data ?? []).filter(c => c.x === x)[0] ?? {alive: false};
}
</script>

<template>
  <tr>
    <GameCell v-for="x in cells" :key="x" :data="getCell(x)" :data-id="'x'+x" />
  </tr>
</template>
