import React from 'react';
import styles from './Card.module.css';

function Card(props) {
  const { title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Card;
