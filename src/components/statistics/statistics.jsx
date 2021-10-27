import s from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { className, title, stats } = props;

  const statisticsClassName = className ? `${className} ${s.statistics}` : s.statistics;

  const statsItems = stats.map(item => (
    <li key={item.id} className={s.item}>
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </li>
  ));

  return (
    <section className={statisticsClassName}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>{statsItems}</ul>
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
