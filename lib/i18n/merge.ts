import type { Messages, Modules } from "./types";

export function merge(modules: Modules): Messages {
  const messages = {};
  Object.entries(modules).forEach(([moduleName, moduleMessages]) => {
    Object.entries(moduleMessages).forEach(([locale, localeMessages]) => {
      if (messages[locale] === undefined) messages[locale] = {};
      Object.entries(localeMessages).forEach(([key, message]) => {
        const normalizedKey = `${moduleName}.${key}`;
        messages[locale][normalizedKey] = message;
      });
    });
  });
  return messages;
}
