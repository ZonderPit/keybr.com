import { test } from "node:test";
import { render } from "@testing-library/react";
import { assert } from "chai";
import { IntlProvider } from "react-intl";
import { Dir } from "./Dir.tsx";

test("left-to-right", async () => {
  const r = render(
    <IntlProvider locale="en">
      <Dir swap="title">
        <div title="left">a</div>
        <div title="right">b</div>
      </Dir>
    </IntlProvider>,
  );

  assert.strictEqual((await r.getByTitle("left")).textContent, "a");
  assert.strictEqual((await r.getByTitle("right")).textContent, "b");

  r.unmount();
});

test("right-to-left", async () => {
  const r = render(
    <IntlProvider locale="he">
      <Dir swap="title">
        <div title="left">a</div>
        <div title="right">b</div>
      </Dir>
    </IntlProvider>,
  );

  assert.strictEqual((await r.getByTitle("left")).textContent, "b");
  assert.strictEqual((await r.getByTitle("right")).textContent, "a");

  r.unmount();
});
