import PropTypes from "prop-types";
import { LiItem } from "./StatisticItem.styled";
import { generateRandomColor } from "components/Statistics/Statistics.styled";

export const StatisticItem = ({label, percentage }) => {
  return (
    <LiItem color={generateRandomColor()}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </LiItem>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};