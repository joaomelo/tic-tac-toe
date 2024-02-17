<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    default: null,
    type: Number,
  },
});

const representation = computed(() => props.value === null
  ? ""
  : props.value === 0
    ? "X"
    : "O");
</script>
<template>
  <span>{{ representation }}</span>
</template>
