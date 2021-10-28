import s from './transactions-table.module.scss';
import PropTypes from 'prop-types';
import TransactionItem from '../transactions-item';

const TransactionsTable = props => {
  const { className, transactions: items } = props;

  const transactionsClassName = `${s.transactions} ${className}`.trim();

  const transactions = items.map(({ id, type, amount, currency }) => (
    <TransactionItem key={id} type={type} amount={amount} currency={currency} />
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
TransactionsTable.propTypes = {
  className: PropTypes.string,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionsTable;
