import type { Key, Locale, Messages, Values } from "./types";

export function t(locale: Locale, messages: Messages, key: Key, values?: Values): string {
  const baseMessage = messages[locale][key];
  if (baseMessage === undefined) return key;
  if (values === undefined) return baseMessage;

  const replaced = Object.entries(values).reduce((acc: string, [key, value]) => {
    const token = `{${key}}`;
    return acc.replaceAll(token, value);
  }, baseMessage);
  return replaced;
}

export function tWith(locale: Locale, messages: Messages) {
  return (key: Key, values?: Values) => t(locale, messages, key, values);
}
