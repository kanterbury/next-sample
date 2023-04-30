import { fireEvent } from "@storybook/testing-library";
import { DelayInput } from ".";
import { RenderResult, render, screen, act } from "@testing-library/react";

describe("DelayInput", () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();

    renderResult = render(<DelayInput onChange={handleChange} />);

    jest.useFakeTimers();
  });

  afterEach(() => {
    renderResult.unmount();
    jest.useFakeTimers();
  });

  it("", () => {
    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
    expect(spanNode).toHaveTextContent("入力したテキスト:");
  });

  it("", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
    expect(spanNode).toHaveTextContent("入力中...");
  });

  it("", async () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`);
  });

  it("", async () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
