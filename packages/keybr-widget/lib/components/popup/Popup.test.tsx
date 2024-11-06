import { test } from "node:test";
import { render } from "@testing-library/react";
import { assert } from "chai";
import { Button } from "../button/index.ts";
import { PortalContainer } from "../portal/index.ts";
import { Popup } from "./Popup.tsx";

test.before(() => {
  const container = document.createElement("div");
  container.id = PortalContainer.id;
  document.body.appendChild(container);
});

test("un-anchored", () => {
  const r = render(
    <>
      <Popup>text</Popup>
    </>,
  );

  assert.isNotNull(r.queryByText("text"));

  r.unmount();
});

test("anchored", () => {
  const r = render(
    <>
      <Button data-id="button" label="button" />
      <Popup anchor="[data-id='button']">text</Popup>
    </>,
  );

  assert.isNotNull(r.queryByText("text"));

  r.unmount();
});
