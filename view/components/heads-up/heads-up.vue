<script setup>
import { UserAvatar } from "../user-avatar";

defineProps({
  player: {
    default: null,
    type: Number,
  },
  status: {
    default: null,
    type: String,
  },
});
</script>
<template>
  <div class="heads-up">
    <span>{{ status }}</span>
    <span class="heads-up-separator" />
    <span v-if="status !== 'DRAW'"><user-avatar :value="player" /></span>
  </div>
</template>
<style scoped>
.heads-up {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heads-up-separator {
  margin-inline: var(--size-20);
}
</style>
