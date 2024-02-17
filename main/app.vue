<script setup>
import { useInject } from "@joaomelo/globals";
import { PagePlay } from "@view";
import { onMounted } from "vue";

const { control } = useInject();
onMounted(() => control.handle({ name: "ready" }));
</script>
<template>
  <page-play />
</template>
<style scoped>
</style>
