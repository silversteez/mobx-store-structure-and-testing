import { decorate, observable, action } from "mobx";

// This is meant to illustrate a pattern for keeping UI/view stores on the central store instance
// TabA and TabB below are "view stores" that get created when the user navigates to that tab and
// replaced/dereferenced when the user navigates to another tab
// The TabManager at the bottom keeps track of the activeTab
// Finally, the <App/> component renders whatever is the activeTab

export class TabA {
  constructor(store) {
    this.store = store;
  }
  id = "a";
  title = "This is Tab A!";
}

decorate(TabA, {
  background: observable
});

export class TabB {
  constructor(store) {
    this.store = store;
  }
  id = "b";
  title = "This is Tab B!";
}

decorate(TabB, {
  background: observable
});

export const TABS = {
  a: {
    value: "a",
    store: TabA
  },
  b: {
    value: "b",
    store: TabB
  }
};

export class TabManager {
  constructor(store) {
    this.store = store;
  }
  // Default tab
  activeTab = new TABS.a.store(this);

  // When user navigates to new tab, instantiate new instance of that tab store
  updateActiveTab(e) {
    const tab = e.target.dataset.tab;
    this.activeTab = new TABS[tab].store(this);
  }
}

decorate(TabManager, {
  activeTab: observable,
  updateActiveTab: action.bound
});
