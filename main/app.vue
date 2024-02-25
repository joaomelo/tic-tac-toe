<script setup>
import { handle } from "@control";
import { inject, onMounted } from "vue";

const state = inject("state");
onMounted(() => handle({ name: "app-ready", state }));
</script>
<template>
  <router-view />
</template>
