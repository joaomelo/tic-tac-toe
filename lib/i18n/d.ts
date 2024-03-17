import type { Locale } from "./types";

export function d(locale: Locale, date: Date, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
