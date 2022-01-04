import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Navigator } from "../main/nav/navigator";
//Tests unitarios hacia los componentes utilizando jest icluido en el testing-library de react
test("Should to get Loading txt returns of the button:", () => {
    const component = render(<Navigator />);
  const btnTest = component.container.querySelector(`[id=send-text]`);
  expect(btnTest).toHaveTextContent("Send Text");
});
