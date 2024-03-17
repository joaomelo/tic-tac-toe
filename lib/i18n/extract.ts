import type { Locale, Messages } from "./types";

export function extract(messages: Messages): Locale[] {
  return Object.keys(messages);
}
