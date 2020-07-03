import React from 'react';
import styles from './Indicator.module.css';

function Indicator(props) {
  const {
    value,
    title,
    subtitle,
    color = 'blue',
    isSelected = false,
    isSelectable = false,
  } = props;

  function getClassName() {
    let className = [styles.container];
    if (!isSelected && isSelectable) {
      className.push(styles.hover);
    }
    if (isSelectable) {
      className.push(styles.cursor);
    }
    if (isSelected) {
      className.push(styles.selected);
    }
    return className.join(' ');
  }

  return (
    <div onClick={props.onClick} className={getClassName()}>
      <div className={styles.value} style={{ backgroundColor: color }}>
        {value}
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default Indicator;
