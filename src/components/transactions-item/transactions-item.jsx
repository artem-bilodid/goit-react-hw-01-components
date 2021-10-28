import s from './transactions-item.module.scss';
import PropTypes from 'prop-types';

const TransactionsItem = props => {
  const { className, type, amount, currency } = props;

  const transactionsItemClassName = `${s.row} ${className}`.trim();

  return (
    <tr className={transactionsItemClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionsItem.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsItem;
