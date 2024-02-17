<script setup>
import { useInject } from "@joaomelo/globals";
import { BoardBase, HeadsUp } from "@view";

const { control } = useInject();
</script>
<template>
  <div>
    <heads-up
      :status="control.bind('status')"
      :player="control.bind('player')"
      class="page-play-heads-up"
    />
    <board-base
      :fill="control.bind('board')"
      @attempt="control.handle({ name: 'attempt', payload: $event })"
    />
  </div>
</template>
<style scoped>
.page-play-heads-up {
  margin-bottom: var(--size-40);
}
</style>
