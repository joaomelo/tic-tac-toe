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
    <h1 class="page-play-heading">
      tic tac toe
    </h1>
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
.page-play-heading {
  font-size: var(--font-size-25);
  margin-block: var(--size-20);
  text-align: center;
}

.page-play-heads-up {
  margin-bottom: var(--size-40);
}
</style>
