import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setActivePage } from "./data/actions";
import { PAGES } from "./data/enums";

import Wallets from "./scenes/Wallets";
import Transactions from "./scenes/Transactions";

const mapStateToProps = (state, ownProps) => {
  const { activePage } = state;
  return { activePage: activePage };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActivePage }, dispatch);
};

const Navigation = (props) => {
  const { activePage } = props;

  if (activePage === PAGES.WALLETS) {
    return <Wallets />;
  } else if (activePage === PAGES.TRANSACTIONS) {
    return <Transactions />;
  }

  return <div>Something went wrong</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
