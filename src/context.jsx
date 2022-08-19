import { createContext } from "react";

const pizzaContext = createContext({
  allPizza: [],
  setAllPizza: () => {},
});

export default pizzaContext;
