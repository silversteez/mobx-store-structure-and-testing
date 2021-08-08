import React from "react";
import { observer } from "mobx-react";

import { getStore } from "../store/context";
import { TABS } from "../store/Tabs";
const { tabManager } = getStore();

function TabNav() {
  return (
    <div className="nav">
      <button
        className={tabManager.activeTab.id === TABS.a.value ? "active" : ""}
        onClick={tabManager.updateActiveTab}
        data-tab={TABS.a.value}
        data-testid="tab-a-button"
      >
        Tab A
      </button>
      <button
        className={tabManager.activeTab.id === TABS.b.value ? "active" : ""}
        onClick={tabManager.updateActiveTab}
        data-tab={TABS.b.value}
        data-testid="tab-b-button"
      >
        Tab B
      </button>
    </div>
  );
}

export default observer(TabNav);
