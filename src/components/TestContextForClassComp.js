import React from "react";

import { StoreContext } from "../store/context";

// Class-based components can use this method to grab context
// (as long as they only need one type of context, which is likely)
// Probably don't need to use any <Provider>'s at all...?
export default class Test extends React.Component {
  static contextType = StoreContext;
  render() {
    const store = this.context;
    return <div>{store.testText}</div>;
  }
}
