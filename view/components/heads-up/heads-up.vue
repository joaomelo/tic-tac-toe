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
    <span v-if="status === 'DRAW'">draw</span>
    <span v-else-if="status === 'WON'">player <user-avatar :value="player" /> won</span>
    <span v-else-if="status === 'PLAYER_TURN'">player <user-avatar :value="player" /> turn</span>
    <span v-else>invalid status</span>
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
