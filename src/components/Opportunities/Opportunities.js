import React from 'react';
import styles from './Opportunities.module.css';
import Card from '../Card';
import Indicator from '../Indicator';

function Opportunities(props) {
  const { data } = props;

  function getOportunitiesTotalAmount() {
    return (
      data.won.amount +
      data.lost.amount +
      data.open.amount +
      data.discarded.amount
    );
  }

  return (
    <Card title={'Oportunidades (' + getOportunitiesTotalAmount() + ')'}>
      <div className={styles.indicatorGrid}>
        <Indicator
          value={data.won.amount}
          title="Ganhas"
          subtitle={data.won.value}
          color="green"
        />
        <Indicator
          value={data.lost.amount}
          title="Perdida"
          subtitle={data.lost.value}
          color="red"
        />
        <Indicator
          value={data.open.amount}
          title="Abertas"
          subtitle={data.open.value}
          color="blue"
        />
        <Indicator
          value={data.discarded.amount}
          title="Descartes"
          subtitle={data.discarded.value}
          color="grey"
        />
      </div>
    </Card>
  );
}

export default Opportunities;
