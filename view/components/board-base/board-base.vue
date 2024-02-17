<script setup>
import BoardBaseCell from "./board-base-cell.vue";
import { isValid } from "./valid";

defineProps({
  fill: {
    required: true,
    type: Array,
    validator: (values) => {
      if (!Array.isArray(values)) return false;
      if (values.length !== 9) return false;
      return values.every(isValid);
    },
  },
});
defineEmits(["attempt"]);

const decideClasses = i => ({
  bottom: i === 3 || i === 4 || i === 5,
  left: i === 1 || i === 4 || i === 7,
  right: i === 1 || i === 4 || i === 7,
  top: i === 3 || i === 4 || i === 5,
});
</script>
<template>
  <div class="board-base">
    <div class="board-base-cells">
      <template
        v-for="(value, index) in fill"
        :key="index"
      >
        <board-base-cell
          :value="value"
          :class="decideClasses(index)"
          @click="$emit('attempt', index)"
        />
      </template>
    </div>
  </div>
</template>
<style>
.board-base {
  --border: solid var(--size-05) var(--color-black);
}

.board-base {
  display: flex;
  justify-content: center;
  align-items: center;
}

.board-base-cells {
  display: grid;
  grid-template-columns: max-content max-content max-content;
}

.right {
  border-right: var(--border);
}

.left {
  border-left: var(--border);
}

.top {
  border-top: var(--border);
}

.bottom {
  border-bottom: var(--border);
}
</style>
