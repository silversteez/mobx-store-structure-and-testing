import { createContext, useContext } from "react";
import { Store } from "./Store";

export let store;
export let StoreContext;
// experimenting with this for resetting store (and store context)
export const resetStore = () => {
  store = new Store();
  StoreContext = createContext(store);
  // for toying around on the window
  window.store = store;
  console.log("new store instance created!");
  return store;
};

// Call this right here so any components importing StoreContext won't
// throw an error because context object is undefined.
resetStore();

export const getStore = () => store;

// create custom hook for useStoreContext to make life a little easier!
export const useStoreContext = () => useContext(StoreContext);
