<script setup>
import { computed } from "vue";

import { isValid } from "./valid";
const props = defineProps({
  value: {
    default: null,
    type: Number,
    validator: isValid,
  },
});

const representation = computed(() => props.value === null
  ? ""
  : props.value === 0
    ? "X"
    : "O");
</script>
<template>
  <div class="board-base-cell">
    {{ representation }}
  </div>
</template>
<style>
.board-base-cell {
  width: var(--size-55);
  height: var(--size-55);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--font-size-25);
}
</style>
