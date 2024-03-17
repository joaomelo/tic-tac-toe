import { describe, expect, test } from "vitest";

import { t, tWith } from "./t";

describe("translate", () => {
  const messages = {
    "en": {
      "sign-in": "sign in",
      "sign-out": "sign out {name}",
    },
    "pt-br": {
      "sign-in": "entrar",
      "sign-out": "sair {name}",
    },
  };

  test("translates to the correct locale", () => {
    const message = t("en", messages, "sign-in");
    expect(message).toBe("sign in");
  });

  test("interpolate values", () => {
    const message = t("pt-br", messages, "sign-out", { name: "joe" });
    expect(message).toBe("sair joe");
  });

  test("helper with", () => {
    const t = tWith("en", messages);
    const message = t("sign-out", { name: "joe" });
    expect(message).toBe("sign out joe");
  });

  test("returns key if message is not found", () => {
    const message = t("en", messages, "sign-up");
    expect(message).toBe("sign-up");
  });
});
