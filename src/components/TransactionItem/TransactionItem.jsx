import PropTypes from "prop-types";
import { TransItemer } from "./TransactioItem.styled";

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TransItemer>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransItemer>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};