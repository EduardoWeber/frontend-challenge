import React from 'react';
import styles from './CreditLimit.module.css';
import Card from '../card';

function CreditLimit(props) {
  return (
    <Card title="Limite de crédito">
      <div className={styles.creditItem}>
        <div className={styles.value} style={{ color: 'blue' }}>
          R$ 12.000,00
        </div>
        <div className={styles.description}>Concedido</div>
      </div>
      <div className={styles.creditItem}>
        <div className={styles.value} style={{ color: 'green' }}>
          R$ 3.105,00
        </div>
        <div className={styles.description}>Disponível</div>
      </div>
    </Card>
  );
}

export default CreditLimit;
