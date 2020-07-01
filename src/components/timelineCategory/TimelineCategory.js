import React from 'react';
import styles from './TimelineCategory.module.css';
import TimelineItem from '../timelineItem';

function TimelineCategory(props) {
  const { name, color = 'red' } = props;

  const items = [
    {
      title: 'Reunião',
      contact: 'Fulano',
      date: 'Ontem',
      icon: 'email',
    },
    {
      title: 'Reunião de grupo',
      contact: 'Fulano',
      date: 'Ontem',
      icon: 'group',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.timelineColumn}>
        <div className={styles.circle} style={{ backgroundColor: color }}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.timelineContent}>
        <div className={styles.title}>{name}</div>
        {items.map((item) => (
          <TimelineItem
            title={item.title}
            contact={item.contact}
            date={item.date}
            icon={item.icon}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineCategory;
