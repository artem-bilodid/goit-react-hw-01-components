import styles from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { className, title, stats } = props;

  const statisticsClassName = className ? `${className} ${styles.statistics}` : styles.statistics;

  const statsItems = stats.map(item => (
    <li key={item.id} className={styles.item}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));

  return (
    <section className={statisticsClassName}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statsItems}</ul>
    </section>
  );
};

Statistics.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
