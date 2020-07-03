import React from 'react';
import styles from './IconInfo.module.css';
import getIconByName from '../../utils/IconHelper';

function IconInfo(props) {
  const { icon, value, description, color = '#4d4d4d' } = props;

  return (
    <div className={styles.container}>
      {getIconByName(icon, color)}
      <div className={styles.text}>
        <div className={styles.title}>{value}</div>
        <div className={styles.subtitle}>{description}</div>
      </div>
    </div>
  );
}

export default IconInfo;
