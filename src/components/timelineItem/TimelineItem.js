import React from 'react';
import styles from './TimelineItem.module.css';
import getIconByName from '../../utils/IconHelper';

function TimelineItem(props) {
  const { icon, title, contact, date, color = 'yellow' } = props;

  return (
    <div className={styles.container}>
      {getIconByName(icon, color)}
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{contact}</div>
        <div className={styles.subtitle}>{date}</div>
      </div>
    </div>
  );
}

export default TimelineItem;
