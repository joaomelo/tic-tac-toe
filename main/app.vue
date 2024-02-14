<script setup>
import { useInject } from "@joaomelo/globals";
import { BoardBase } from "@view";

const { game } = useInject();
console.log({ game });
</script>
<template>
  <board-base :fill="[null, 0, 1, 0, null, 1, null, null, null]" />
</template>
<style scoped>
</style>
