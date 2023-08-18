import PropTypes from "prop-types";
import { StatisticItem } from "components/StatisticItem/StatisticItem";
import { Statisticser } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Statisticser>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key = {id} label={label} percentage={percentage} />
        ))}
      </ul>
    </Statisticser>
  );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
    title: PropTypes.string.isRequired,
}

