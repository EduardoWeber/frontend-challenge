import React from 'react';
import styles from './FinancialSecurities.module.css';
import Card from '../card';
import Indicator from '../indicator';

function FinancialSecurities(props) {
  return (
    <Card title="Titulos financeiros">
      <div className={styles.indicatorList}>
        <Indicator
          value="1"
          title="R$ 3.105,00"
          subtitle="Vencidos"
          color="red"
        />
        <Indicator
          value="2"
          title="R$ 3.105,00"
          subtitle="A vencer"
          color="orange"
        />
        <Indicator
          value="2"
          title="R$ 3.105,00"
          subtitle="Pagos"
          color="green"
        />
      </div>
    </Card>
  );
}

export default FinancialSecurities;
