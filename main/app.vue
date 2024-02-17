<script setup>
import { useInject } from "@joaomelo/globals";
import { BoardBase } from "@view";
import { onMounted } from "vue";

const { control } = useInject();
onMounted(() => control.handle({ name: "ready" }));
</script>
<template>
  <board-base
    :fill="control.bind('board')"
    @attempt="control.handle({ name: 'attempt', payload: $event })"
  />
</template>
<style scoped>
</style>
