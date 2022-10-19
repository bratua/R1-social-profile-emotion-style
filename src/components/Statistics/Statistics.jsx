import PropTypes from 'prop-types';
import css from './statistics.module.css';
import randomColor from '../../Utils/randomColor';

function Statistics({ data, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(statData => {
          const { id, label, percentage } = statData;
          // const randomHexColor = `#${randomColor()}`;
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: `#${randomColor()}` }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
