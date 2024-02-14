<script setup>
import BoardBaseCell from "./board-base-cell.vue";
import { isValid } from "./valid";
defineProps({
  fill: {
    default: () => Array(9).fill(null),
    type: Array,
    validator: (values) => {
      if (!Array.isArray(values)) return false;
      if (values.length !== 9) return false;
      return values.every(isValid);
    },
  },
});
</script>
<template>
  <div class="board-base">
    <board-base-cell
      :value="fill[0]"
    />
    <board-base-cell
      :value="fill[1]"
      class="right left"
    />
    <board-base-cell
      :value="fill[2]"
    />
    <board-base-cell
      :value="fill[3]"
      class="bottom top"
    />
    <board-base-cell
      :value="fill[4]"
      class="bottom top right left"
    />
    <board-base-cell
      :value="fill[5]"
      class="bottom top"
    />
    <board-base-cell
      :value="fill[6]"
    />
    <board-base-cell
      :value="fill[7]"
      class="right left"
    />
    <board-base-cell
      :value="fill[8]"
    />
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
