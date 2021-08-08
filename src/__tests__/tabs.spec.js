import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import TabNav from "../components/TabNav";
import TabContent from "../components/TabContent";
import { resetStore } from "../store/context";

afterEach(cleanup);

// Make sure each test has a clean store instance
beforeEach(() => resetStore());

const Wrapper = () => (
  <>
    <TabNav />
    <TabContent />
  </>
);
// Test the whole app? It works!
describe(`test the tabs functionality`, () => {
  it(`clicking buttons should update and display correct tab content`, () => {
    const { getByTestId } = render(<Wrapper />);
    const [buttonA, buttonB, contentA] = [
      getByTestId("tab-a-button"),
      getByTestId("tab-b-button"),
      getByTestId("tab-a-content")
    ];

    expect(contentA).toBeInTheDOM();
    fireEvent.click(buttonB);
    expect(getByTestId("tab-b-content")).toBeInTheDOM();
    fireEvent.click(buttonA);
    expect(contentA).toBeInTheDOM();
  });
});
