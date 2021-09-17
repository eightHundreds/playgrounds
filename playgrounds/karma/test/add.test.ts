import { add } from "../src";
import { expect } from "chai";

it("add", () => {
    expect(add(1, 2)).to.eq(3);
});
