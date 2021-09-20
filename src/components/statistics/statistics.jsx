import styles from "./statistics.module.scss";

const Statistics = (props) => {
  const { className, title, stats } = props;

  const statisticsClassName = className
    ? `${className} ${styles.statistics}`
    : styles.statistics;

  const statsItems = stats.map((item) => (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));

  return (
    <section className={statisticsClassName}>
      {title ? <h2 className={styles.title}>{title}</h2> : ""}
      <ul className={styles.statList}>{statsItems}</ul>
    </section>
  );
};

export default Statistics;
