import s from './statistics.module.scss';
import PropTypes from 'prop-types';
import StatisticsItem from '../statistics-item';

const Statistics = props => {
  const { className, title, stats } = props;

  const statisticsClassName = `${s.statistics} ${className}`.trim();

  const statsItems = stats.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} label={label} percentage={percentage} />
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
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
