import PropTypes from "prop-types";
import { StatisticItem } from "StatisticItem/StatisticItem";

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key = {id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
    title: PropTypes.string.isRequired,
}

