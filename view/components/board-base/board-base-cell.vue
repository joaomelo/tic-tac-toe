<script setup>
import { UserAvatar } from "../user-avatar";
import { isValid } from "./valid";

defineProps({
  value: {
    default: null,
    type: Number,
    validator: isValid,
  },
});
defineEmits(["click"]);
</script>
<template>
  <div
    class="board-base-cell"
    @click="$emit('click')"
  >
    <user-avatar :value="value" />
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
