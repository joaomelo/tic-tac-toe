<script setup>
import { tWith } from "@joaomelo/i18n";
import { inject, toRef } from "vue";

import { useName } from "../use-name";

const props = defineProps({
  player: {
    default: null,
    type: Number,
  },
  status: {
    default: null,
    type: String,
  },
});

const { i18n } = inject("state");
const t = tWith(i18n);
const name = useName(toRef(props, "player"));
</script>
<template>
  <div class="heads-up">
    <span v-if="status === 'DRAW'">{{ t('draw') }}</span>
    <span v-else-if="status === 'WON'">{{ t('won', { name }) }}</span>
    <span v-else-if="status === 'PLAYER_TURN'">{{ t('turn', { name }) }}</span>
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
