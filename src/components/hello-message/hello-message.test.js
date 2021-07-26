import { expect } from '@jest/globals';
import React from "react";
import { render } from "@testing-library/react";
import { HelloMessage } from './hello-message';


test("displays the right text", () => {
    const result = render(<HelloMessage name="Chris" />);
    const someText = result.container.querySelector("div");
    expect(someText.textContent).toBe("Hello Chris");
})