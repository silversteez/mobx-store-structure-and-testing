import React from "react";
import { observer } from "mobx-react";

import { store } from "../store/context";
const { tabManager } = store;

function TabContent() {
  // Which Tab Content should we display?
  const tabContent = {
    a: (
      <div className="tab tab-a" data-testid="tab-a-content">
        Tab A Content...
      </div>
    ),
    b: (
      <div className="tab tab-b" data-testid="tab-b-content">
        Tab B Content...
      </div>
    )
  };
  const activeTabTitle = tabManager.activeTab.title;
  const activeTabContent = tabContent[tabManager.activeTab.id];
  return (
    <>
      {activeTabTitle}
      {activeTabContent}
    </>
  );
}

export default observer(TabContent);
