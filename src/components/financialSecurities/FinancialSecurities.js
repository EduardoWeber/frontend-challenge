import React from 'react';
import styles from './FinancialSecurities.module.css';
import Card from '../card';
import Indicator from '../indicator';

function FinancialSecurities(props) {
  const { data } = props;
  return (
    <Card title="Titulos financeiros">
      <div className={styles.indicatorList}>
        <Indicator
          value={data.overdue.amount}
          title={data.overdue.value}
          subtitle="Vencidos"
          color="red"
        />
        <Indicator
          value={data.nearOverdue.amount}
          title={data.nearOverdue.value}
          subtitle="A vencer"
          color="orange"
        />
        <Indicator
          value={data.paid.amount}
          title={data.paid.value}
          subtitle="Pagos"
          color="green"
        />
      </div>
    </Card>
  );
}

export default FinancialSecurities;
