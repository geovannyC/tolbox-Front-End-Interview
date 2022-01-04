import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { CardBackground } from "../main/card-background/cardBackground";
import { Content } from "../main/content/content";
import { Navigator } from "../main/nav/navigator";
//Tests unitarios hacia los componentes utilizando jest icluido en el testing-library de react
test("Should to get text Results:", () => {
  const component = render(<CardBackground />);
  component.getByText("Results:");
});
test("Should to get Loading txt returns of the button:", () => {
    const component = render(<Navigator />);
  const btnTest = component.container.querySelector(`[id=send-text]`);
  fireEvent.click(btnTest);
  expect(btnTest).toHaveTextContent("Loading...");
});
