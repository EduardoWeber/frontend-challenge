import React from 'react';
import styles from './TimelineCategory.module.css';
import TimelineItem from '../timelineItem';

function TimelineCategory(props) {
  const { name, color = 'red', data = [] } = props;

  function getIconFromType(type) {
    switch (type) {
      case 'call':
        return 'phone';
      case 'meeting':
        return 'group';
      default:
        return type;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.timelineColumn}>
        <div className={styles.circle} style={{ backgroundColor: color }}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.timelineContent}>
        <div className={styles.title}>{name}</div>
        {data.map((item) => (
          <TimelineItem
            title={item.title}
            contact={item.contact}
            date={item.date}
            icon={getIconFromType(item.type)}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineCategory;
