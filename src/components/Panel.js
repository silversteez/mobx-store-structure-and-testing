import React from "react";
import { observer } from "mobx-react";

import { getStore } from "../store/context";
const { colors } = getStore();

const Panel = observer(({ children }) => {
  return (
    <div style={{ padding: 10, backgroundColor: colors.background }}>
      {children}
    </div>
  );
});

export default Panel;
