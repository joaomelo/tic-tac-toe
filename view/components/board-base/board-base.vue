<script setup>
import BoardBaseCell from "./board-base-cell.vue";
</script>
<template>
  <div class="board-base">
    <board-base-cell />
    <board-base-cell class="right left" />
    <board-base-cell />
    <board-base-cell class="bottom top" />
    <board-base-cell class="bottom top right left" />
    <board-base-cell class="bottom top" />
    <board-base-cell />
    <board-base-cell class="right left" />
    <board-base-cell />
  </div>
</template>
<style>
.board-base {
  --border: solid var(--size-05) var(--color-black);
}

.board-base {
  display: grid;
  grid-template-columns: max-content max-content max-content;
}

.right {
  border-right: var(--border);
}

.left {
  border-left: var(--border);
}

.top {
  border-top: var(--border);
}

.bottom {
  border-bottom: var(--border);
}
</style>
