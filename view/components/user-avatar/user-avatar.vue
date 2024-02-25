<script setup>
import { toRef } from "vue";

import { useName } from "../use-name";

const props = defineProps({
  value: {
    default: null,
    type: Number,
  },
});

const representation = useName(toRef(props, "value"));
</script>
<template>
  <span>{{ representation }}</span>
</template>
