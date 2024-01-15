import style from './css/statistics.module.css';

const getColorForPercentage = percentage => {
  const colorScale = [
    'rgb(212, 40, 40)',
    'yellow',
    'green',
    'red',
    'violet',
    'turquoise',
  ];

  const index = Math.floor((percentage / 100) * colorScale.length);
  return colorScale[index];
};

const statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statList}>
        {stats.map((item, index) => (
          <li className={style.item} key={item.id}>
            <span className={style.label}>{item.label} </span>
            <span
              className={style.percentage}
              style={{
                backgroundColor: getColorForPercentage(item.percentage),
              }}
            >
              {item.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default statistics;
