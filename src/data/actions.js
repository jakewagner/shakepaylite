export const ACTIONS = {
  ACTIVE_PAGE: "ACTIVE_PAGE",
  UPDATE_QUOTES: "UPDATE_QUOTES",
  UPDATE_CURRENCY: "UPDATE_CURRENCY",
  UPDATE_TRANSACTIONS: "UPDATE_TRANSACTIONS",
};

export function setActivePage(page) {
  return {
    type: ACTIONS.ACTIVE_PAGE,
    page,
  };
}

export function updateQuotes(quoteData) {
  return {
    type: ACTIONS.UPDATE_QUOTES,
    quoteData,
  };
}

export function updateTransactions(transactions) {
  return {
    type: ACTIONS.UPDATE_TRANSACTIONS,
    transactions,
  };
}

export function setActiveCurrency(currency) {
  return {
    type: ACTIONS.UPDATE_CURRENCY,
    currency,
  };
}
