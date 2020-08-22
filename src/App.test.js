import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import UserEvent from "@testing-library/user-event";

import useToggle from "./hooks/useToggle";
import { renderHook, act } from "@testing-library/react-hooks";

test("renders app title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Liste des messages/i);
  expect(titleElement).toBeInTheDocument();
});

test("app contains initially 4 messages", () => {
  render(<App />);
  const messages = screen.getAllByTestId("card");
  expect(messages.length).toEqual(4);
});

// Le hook fonctionne comme cela
// const [isVisible, toggle] = useToggle(false)
test("toggleHook", function () {
  const { result } = renderHook(() => useToggle(false));
  let [isVisible, toggle] = result.current;
  expect(isVisible).toBeFalsy();
  act(() => toggle());
  [isVisible, toggle] = result.current;
  expect(isVisible).toBeTruthy();
  act(() => toggle());
  [isVisible, toggle] = result.current;
  expect(isVisible).toBeFalsy();
});
