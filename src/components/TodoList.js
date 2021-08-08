import React from "react";
import { observer } from "mobx-react";

import { getStore } from "../store/context";
const { todos } = getStore();
function TodoList() {
  return (
    <ul style={{ listStyle: "none" }} data-testid="todo-list">
      {todos &&
        todos.items.map((t, i) => (
          <li
            onClick={() => todos.toggleTodo(i)}
            style={{
              margin: 10,
              opacity: t.completed ? 0.5 : 1,
              cursor: "pointer",
              textDecoration: t.completed ? "line-through" : "none"
            }}
            key={t.id}
          >
            {t.text}
          </li>
        ))}
    </ul>
  );
}

export default observer(TodoList);
