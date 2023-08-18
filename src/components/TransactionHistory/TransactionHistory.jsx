import { TransactionItem } from "components/TransactionItem/TransactionItem";
import PropTypes from "prop-types";
import { Transacter } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Transacter>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Transacter>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
