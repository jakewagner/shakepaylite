import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setActivePage, updateTransactions } from "../data/actions";
import { fetchTransactions } from "../data/apiMediator";

import { ListItem, Transaction } from "../components";

const mapStateToProps = (state, ownProps) => {
  const { quotes, activeCurrency, transactions } = state;

  return { quotes, activeCurrency, transactions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateTransactions, setActivePage }, dispatch);
};

const Transactions = (props) => {
  const { updateTransactions, transactions, activeCurrency } = props;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTransactions();
      updateTransactions(data);
    };
    fetchData();
  }, []);

  if (transactions.length > 0) {
    return transactions.map((transaction) => {
      if (transaction.currency === activeCurrency) {
        return (
          <ListItem>
            <Transaction transaction={transaction} />
          </ListItem>
        );
      }
      return null;
    });
  }
  return <p>loading...</p>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
