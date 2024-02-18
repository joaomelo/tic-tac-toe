<script setup>
import { BoardBase, HeadsUp } from "@view";
defineProps({
  fill: {
    default: null,
    type: Array,
  },
  player: {
    default: null,
    type: Number,
  },
  status: {
    default: null,
    type: String,
  },
});
defineEmits(["cell-click"]);
</script>
<template>
  <div>
    <heads-up
      :status="status"
      :player="player"
      class="page-play-heads-up"
    />
    <board-base
      :fill="fill"
      @cell-click="$emit('cell-click', $event)"
    />
  </div>
</template>
<style scoped>
.page-play-heads-up {
  margin-bottom: var(--size-40);
}
</style>
