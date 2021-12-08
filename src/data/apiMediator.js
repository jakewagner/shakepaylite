export const fetchQuotes = async () => {
  const response = await fetch(
    "https://shakepay.github.io/programming-exercise/web/rates.json"
  );
  const quotes = await response.json();
  return quotes;
};

export const fetchTransactions = async () => {
  const response = await fetch(
    "https://shakepay.github.io/programming-exercise/web/transaction_history.json"
  );
  const transactions = await response.json();

  return transactions;
};
