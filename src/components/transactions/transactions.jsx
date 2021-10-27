import s from './transactions.module.scss';
import PropTypes from 'prop-types';

const Transactions = props => {
  const { className, transactions: items } = props;

  const transactionsClassName = className ? `${className} ${s.transactions}` : s.transactions;

  const transactions = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={s.tableBodyRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={transactionsClassName}>
      <thead>
        <tr className={s.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactions}</tbody>
    </table>
  );
};
Transactions.propTypes = {
  className: PropTypes.string,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Transactions;
