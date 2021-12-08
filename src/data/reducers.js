import { ACTIONS } from "./actions";

const updateActivePage = (state, action) => {
  let newState = Object.assign({}, state);
  newState.activePage = action.page;
  return newState;
};

const updateQuotes = (state, action) => {
  let newState = Object.assign({}, state);
  newState.quotes = action.quoteData;
  return newState;
};

const updateActiveCurrency = (state, action) => {
  let newState = Object.assign({}, state);
  newState.activeCurrency = action.currency;
  return newState;
};

const updateTransactions = (state, action) => {
  console.log(action.transactions);
  let newState = Object.assign({}, state);
  newState.transactions = action.transactions;
  return newState;
};

export default function rootReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ACTIVE_PAGE:
      return updateActivePage(state, action);
    case ACTIONS.UPDATE_QUOTES:
      return updateQuotes(state, action);
    case ACTIONS.UPDATE_TRANSACTIONS:
      return updateTransactions(state, action);
    case ACTIONS.UPDATE_CURRENCY:
      return updateActiveCurrency(state, action);
    default:
      return state;
  }
}
