import { connect } from "react-redux";
import styled from "styled-components";

import { CURRENCY_NAME } from "../data/enums";

const Icon = styled.img``;

const mapStateToProps = (state, ownProps) => {
  return { quotes: state.quotes };
};

const WalletOverview = (props) => {
  const { type, quotes, quotePair, balance, iconSource } = props;

  return (
    <div>
      <h3>{CURRENCY_NAME[type]}</h3>
      <Icon src={iconSource} />
      {quotes[quotePair]}
      and
      {balance}
      and
      {quotePair ? balance * parseFloat(quotes[quotePair]) : null}
    </div>
  );
};

export default connect(mapStateToProps)(WalletOverview);
