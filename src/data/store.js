import { createStore } from "redux";
import rootReducer from "./reducers";

import { PAGES } from "./enums";

const rootStore = {
  activePage: PAGES.WALLETS,
  quotes: {},
  activeCurrency: null,
  transactions: {},
};

const store = createStore(rootReducer, rootStore);

export default store;
