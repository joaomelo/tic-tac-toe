<script setup>
import { useInject } from "@joaomelo/globals";
import { onMounted } from "vue";

const { control } = useInject();
onMounted(() => control.handle({ name: "app-ready" }));
</script>
<template>
  <router-view />
</template>
