import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import UserEvent from "@testing-library/user-event";

import useToggleModal from "./hooks/useToggleModal";
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
// const [isVisible, toggle] = useToggleModal(false)
test("toggleHook", function () {
  const { result } = renderHook(() => useToggleModal(false));
  expect(result.current.isVisible).toBeFalsy();
  act(() => result.current.toggle());
  expect(result.current.isVisible).toBeTruthy();
  act(() => result.current.toggle());
  expect(result.current.isVisible).toBeFalsy();
});

// test("modal open when openModal button is clicked", () => {
//   const { getByTestId } = render(<App />);

//   const openModalButton = getByTestId("openModal");
//   const modalElement = getByTestId("modal");

//   act(() => {
//     UserEvent.click(openModalButton);
//   });
//   expect(modalElement).toBeInTheDocument();
// });
