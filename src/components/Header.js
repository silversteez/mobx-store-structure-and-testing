import React from "react";
import { observer } from "mobx-react";

// This comp just gets passed a couple props rather than accessing the store
// Question - upon what criteria do we decide to use store via context, pass a
// store down via props, or just pass a few props like we see here...
function Header({ title, toggleColor }) {
  return (
    <h2 onClick={toggleColor} style={{ cursor: "pointer" }}>
      {title}
    </h2>
  );
}

export default observer(Header);
