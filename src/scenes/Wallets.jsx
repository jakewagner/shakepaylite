import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import {
  updateQuotes,
  setActivePage,
  setActiveCurrency,
} from "../data/actions";
import { fetchQuotes } from "../data/apiMediator";

import { ListItem, WalletOverview } from "../components";

import logo from "../assets/logo.svg";
import btcSymbol from "../assets/symbolbtc.svg";
import ethSymbol from "../assets/symboleth.svg";
import cadSymbol from "../assets/symbolcad.svg";

import { CURRENCY_TYPES, QUOTE_PAIRS, PAGES } from "../data/enums";

const Balance = styled.h2`
  list-style-type: none;
`;

const Logo = styled.img`
  list-style-type: none;
`;

const mapStateToProps = (state, ownProps) => {
  return { quotes: state.quotes };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateQuotes, setActivePage, setActiveCurrency },
    dispatch
  );
};

const Wallets = (props) => {
  const { updateQuotes, setActiveCurrency, setActivePage, quotes } = props;

  useEffect(() => {
    const getQuotes = setInterval(async () => {
      const quotes = await fetchQuotes();
      updateQuotes(quotes);
    }, 3000);
    return () => clearInterval(getQuotes);
  }, []);

  const handleWalletSelection = (currency) => {
    setActivePage(PAGES.TRANSACTIONS);
    setActiveCurrency(CURRENCY_TYPES[currency]);
  };

  return (
    <div>
      <Logo src={logo} />
      <Balance>{"$8,844.42"}</Balance>
      <ul>
        <ListItem onClick={() => handleWalletSelection(CURRENCY_TYPES.CAD)}>
          <WalletOverview
            type={CURRENCY_TYPES.CAD}
            balance={1856.34}
            iconSource={cadSymbol}
          />
        </ListItem>
        <ListItem onClick={() => handleWalletSelection(CURRENCY_TYPES.BTC)}>
          <WalletOverview
            type={CURRENCY_TYPES.BTC}
            balance={0.4946}
            quotePair={QUOTE_PAIRS.BTCCAD}
            iconSource={btcSymbol}
          />
        </ListItem>
        <ListItem onClick={() => handleWalletSelection(CURRENCY_TYPES.ETH)}>
          <WalletOverview
            type={CURRENCY_TYPES.ETH}
            quotePair={QUOTE_PAIRS.ETHCAD}
            balance={2.9429}
            iconSource={ethSymbol}
          />
        </ListItem>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);
