import React from "react";
import { observer } from "mobx-react";

import { getStore } from "../store/context";
const { todos } = getStore();

function TodoInput() {
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      todos.addTodo(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} data-testid="todo-input" />
    </div>
  );
}

export default observer(TodoInput);
