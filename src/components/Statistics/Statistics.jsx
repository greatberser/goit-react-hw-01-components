import 'normalize.css';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
      <div className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2> }
  
        <ul className={css.stats}>
          {stats.map(({ id, label, percentage }) => (
            <li className={css.statisticItem} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default Statistics;