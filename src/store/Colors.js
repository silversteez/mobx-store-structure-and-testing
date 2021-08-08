import { decorate, observable } from "mobx";

export class Colors {
  constructor(store) {
    this.store = store;
  }

  background = "white";

  // computed color that cares about something in another store...
  get dependsOnTodos() {
    return this.store.todos.remainingItems === 0 ? "green" : "black";
  }

  toggleBackground = () => {
    this.background = this.background === "white" ? "lightyellow" : "white";
  };
}

decorate(Colors, {
  background: observable
});
