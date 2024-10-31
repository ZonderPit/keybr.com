import { test } from "node:test";
import { assert } from "chai";
import { expand, replace } from "./normalize.ts";

test("expand", () => {
  assert.strictEqual(expand(/* "A" */ 0x0041), null);
  assert.deepStrictEqual(expand(/* "À" */ 0x00c0), [/* "A" */ 0x0041]);
  assert.deepStrictEqual(
    expand(/* HORIZONTAL ELLIPSIS */ 0x2026),
    [/* "." */ 0x002e, /* "." */ 0x002e, /* "." */ 0x002e],
  );
});

test("replace", () => {
  assert.strictEqual(replace(/* HYPHEN-MINUS */ 0x002d), null);
  assert.strictEqual(replace(/* HYPHEN */ 0x2010), /* HYPHEN-MINUS */ 0x002d);
  assert.strictEqual(
    replace(/* NON-BREAKING HYPHEN */ 0x2011),
    /* HYPHEN-MINUS */ 0x002d,
  );
});
