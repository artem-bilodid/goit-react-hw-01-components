import styles from "./transactions.module.scss";

const Transactions = (props) => {
  const { className, transactions: items } = props;

  const transactionsClassName = className
    ? `${className} ${styles.transactions}`
    : styles.transactions;

  const transactions = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.tableBodyRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={transactionsClassName}>
      <thead>
        <tr className={styles.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactions}</tbody>
    </table>
  );
};

export default Transactions;
