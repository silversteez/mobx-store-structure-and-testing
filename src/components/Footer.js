import React from "react";
import { observer } from "mobx-react";

import { getStore } from "../store/context";
const { todos, colors } = getStore();

function Footer() {
  return (
    <p style={{ color: colors.dependsOnTodos }} data-testid="footer">
      {todos.remainingItems} / {todos.items.length} left
    </p>
  );
}

export default observer(Footer);
