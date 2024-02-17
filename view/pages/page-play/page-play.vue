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
    />
    <board-base
      :fill="control.bind('board')"
      @attempt="control.handle({ name: 'attempt', payload: $event })"
    />
  </div>
</template>
<style scoped>
</style>
