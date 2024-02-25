import { computed, toValue } from "vue";

export function useName(player) {
  return computed(() => toValue(player) === null
    ? ""
    : toValue(player) === 0
      ? "X"
      : "O");
}
