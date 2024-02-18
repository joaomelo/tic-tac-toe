<script setup>
import { useInject } from "@joaomelo/globals";
import { PagePlay } from "@view";

const { control } = useInject();
</script>
<template>
  <page-play
    :status="control.bind('status')"
    :player="control.bind('player')"
    :fill="control.bind('board')"
    @cell-click="control.handle({ name: 'move', payload: $event })"
  />
</template>
