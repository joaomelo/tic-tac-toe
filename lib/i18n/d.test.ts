import { describe, expect, test } from "vitest";

import { d } from "./d";

describe("i18n", () => {
  test("format dates using the underlying ", () => {
    const date = new Date(2012, 5);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    expect(d("en", date, options)).toBe("6/1/2012");
  });
});
