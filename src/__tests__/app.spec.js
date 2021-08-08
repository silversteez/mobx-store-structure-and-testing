// import { store } from "../store/context";
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import { App } from "../App";
import { resetStore } from "../store/context";

// jest.mock("../store/context");
console.log("jest is", jest);

afterEach(cleanup);

// Make sure each test has a clean store instance
beforeEach(() => resetStore());

// Test the whole app? It works!
describe(`test the todo list and footer`, () => {
  it(`should render the todos and footer correctly`, () => {
    console.log("app.spec first it");
    const { getByTestId } = render(<App />);
    const [ul, footer] = [getByTestId("todo-list"), getByTestId("footer")];

    expect(ul.children.length).toBe(2);
    expect(footer.textContent).toContain("2 / 2");
  });

  it(`should change footer text on toggle of list item`, () => {
    console.log("app.spec second it");
    const { getByTestId } = render(<App />);
    const [ul, footer] = [getByTestId("todo-list"), getByTestId("footer")];

    fireEvent.click(ul.children[0]);
    expect(footer.textContent).toContain("1 / 2");
    fireEvent.click(ul.children[1]);
    expect(footer.textContent).toContain("0 / 2");
  });
});
