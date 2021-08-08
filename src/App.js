import React from "react";
import { observer } from "mobx-react";

import Panel from "./components/Panel";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Footer from "./components/Footer";
import Test from "./components/TestContextForClassComp";
import TabNav from "./components/TabNav";
import TabContent from "./components/TabContent";

import "./styles.css";

import { useStoreContext } from "./store/context";

export const App = observer(() => {
  const store = useStoreContext();
  console.log("rendering App...");

  return (
    <Panel>
      {/* For Header, we're just passing a couple props... */}
      <Header
        title={store.headerTitle}
        toggleColor={store.colors.toggleBackground}
      />
      {/* The other components grab the store context directly */}
      <TodoInput />
      <TodoList />
      <Footer />
      <Test />
      <TabNav />
      <TabContent />
    </Panel>
  );
});
