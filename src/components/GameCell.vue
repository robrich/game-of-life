<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <td :class="{alive: data.alive}">
    &nbsp;
  </td>
</template>

<style scoped>
td {
  border: 1px solid black;
}
.alive {
  background-color: black;
}
</style>
