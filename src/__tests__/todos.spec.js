import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { resetStore } from "../store/context";

afterEach(cleanup);

// Make sure each test has a clean store instance
let store;
beforeEach(() => (store = resetStore()));

describe(`test the todo list`, () => {
  it(`should render the todos correctly`, () => {
    console.log("other.spec first it");
    const { getByTestId } = render(<TodoList />);
    const ul = getByTestId("todo-list");

    expect(ul.children.length).toBe(2);
  });

  it(`should update the store when todos are clicked`, () => {
    console.log("other.spec second it");
    const { getByTestId } = render(<TodoList />);
    const ul = getByTestId("todo-list");

    fireEvent.click(ul.children[0]);
    expect(store.todos.remainingItems).toBe(1);
    fireEvent.click(ul.children[1]);
    expect(store.todos.remainingItems).toBe(0);
  });

  it("should add items to the store", () => {
    store.todos.addTodo("new todo");
    store.todos.addTodo("new todo two");
    expect(store.todos.items.length).toBe(4);
    expect(store.todos.remainingItems).toBe(4);
  });

  it("should add items to the store via TodoInput", () => {
    const { getByTestId } = render(<TodoInput />);
    const input = getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "input new todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
    expect(store.todos.items.length).toBe(3);
    expect(input).toHaveTextContent("");
  });
});
