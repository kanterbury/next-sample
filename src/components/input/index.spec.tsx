import {
  RenderResult,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import { Input } from ".";

describe("Input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("", () => {
    const inputNode = screen.getByRole("textbox");
    expect(inputNode).toHaveValue("");
  });

  it("", () => {
    const inputText = "Test Input text";
    const inputNode = screen.getByRole("textbox");
    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });
});
