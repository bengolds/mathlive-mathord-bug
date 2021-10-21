import { expect } from "@jest/globals";
import * as mathlive from "mathlive";

describe("MathfieldElement", () => {
  it("has a name", () => {
    const mfe = new mathlive.MathfieldElement();
    expect(mfe).toBeDefined();
  });
});
