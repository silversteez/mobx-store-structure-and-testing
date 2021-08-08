Quick test to import a store reference directly rather than use context to see what happens when testing

- short answer: doesn't work very well. when a react component is imported into the test file it will get a reference to an instance of the store and hold onto it. I suppose it could be possible for that store instance to have a resetMyself method, but that doesn't make a lot of sense... It's much easier when a new store reference is pulled out of context each time the component is rendered using useStoreContext
