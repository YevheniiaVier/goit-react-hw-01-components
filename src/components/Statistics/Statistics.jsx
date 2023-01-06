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
  // const statsNormilized = stats.reduce((acc, stat) => {
  //   console.log(acc);
  //   return {
  //     ...acc,
      
    
  //   };
  // }, {});
  return (
    <ProfileStatistic>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} label={stat.label}>
            {/* {console.log(StatItem.props)} */}
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
