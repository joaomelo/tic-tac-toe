import { describe, expect, test } from "vitest";

import { extract } from "./extract";

describe("extract", () => {
  const messages = {
    "en": {
      "sign-in": "sing in",
      "sign-out": "sign out",
    },
    "pt-br": {
      "sign-in": "entrar",
      "sign-out": "sair",
    },
  };

  test("extract supported locales from messages", () => {
    const supported = extract(messages);
    expect(supported).toEqual(["en", "pt-br"]);
  });
});
