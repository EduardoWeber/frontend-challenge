import React from 'react';
import styles from './ContactInfo.module.css';
import getIconByName from '../../utils/IconHelper';

function ContactInfo(props) {
  const { icon, value, description, color = 'yellow' } = props;

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

export default ContactInfo;
