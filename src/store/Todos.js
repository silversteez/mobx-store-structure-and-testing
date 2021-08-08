import { decorate, observable, computed } from "mobx";

export class Todos {
  constructor(store) {
    this.store = store;
  }

  items = [
    { id: 1, text: "Buy eggs", completed: false },
    { id: 2, text: "Write a post", completed: false }
  ];

  get remainingItems() {
    return this.items.filter(t => !t.completed).length;
  }

  toggleTodo = index => {
    this.items[index].completed = !this.items[index].completed;
    console.log(`${this.remainingItems} remainging todos`);
  };

  addTodo = text => {
    this.items.push({
      id: this.items.length + 1, // temporary hack
      text,
      completed: false
    });
  };
}

decorate(Todos, {
  items: observable,
  remainingItems: computed
});
