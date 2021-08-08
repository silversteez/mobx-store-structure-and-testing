// import { decorate, observable, action } from "mobx";
import { Todos } from "./Todos";
import { Colors } from "./Colors";
import { TabManager } from "./Tabs";

/*
This is the "root" Store class - it creates an entire store "tree" when instantiated
All sub-trees created in the constructor are passed a reference to the root store instance
allowing any branch of the tree to access any other branches it needs
*/

export class Store {
  constructor() {
    this.colors = new Colors(this);
    this.todos = new Todos(this);
    this.tabManager = new TabManager(this);
  }

  headerTitle = "Click to toggle color...";
  testText = "test - class-based component down here!";
}
