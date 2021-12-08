const senderReciver = (recipient, sender) => {
  if (recipient) {
    return recipient;
  } else {
    return sender;
  }
};

const Transaction = (props) => {
  const { amount, createdAt, currency, direction, to, from, type } =
    props.transaction;
  console.log(props.transaction);
  return (
    <div>
      <p>{amount}</p>
      <p>{currency}</p>
    </div>
  );
};

export default Transaction;
