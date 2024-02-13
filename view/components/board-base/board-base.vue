<script setup>
import BoardBaseCell from "./board-base-cell.vue";
</script>
<template>
  <div class="board-base">
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
    <board-base-cell />
  </div>
</template>
<style>
.board-base {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
