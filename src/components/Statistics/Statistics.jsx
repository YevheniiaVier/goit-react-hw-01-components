import PropTypes from 'prop-types';
import {
  ProfileStatistic,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const result = [];
  stats.reduce(function (res, stat) {
    if (!res[stat.label]) {
      res[stat.label] = { id: stat.id, label: stat.label, percentage: 0 };
      result.push(res[stat.label]);
    }
    res[stat.label].percentage += stat.percentage;
    return res;
  }, {});
  return (
    <ProfileStatistic>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {result.map(stat => (
          <StatItem key={stat.id} label={stat.label}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </ProfileStatistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
