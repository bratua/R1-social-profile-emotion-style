import PropTypes from 'prop-types';

import {
  Statistics,
  Title,
  StatList,
  StatItem,
  StatLebel,
  StatPercentage,
} from './UploadStatistics.styled';

function UploadStatistics({ data, title }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(statData => {
          const { id, label, percentage } = statData;
          return (
            <StatItem key={id}>
              <StatLebel>{label}</StatLebel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </Statistics>
  );
}

UploadStatistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default UploadStatistics;
