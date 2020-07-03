import React from 'react';
import styles from './Oportunites.module.css';
import Card from '../card';
import Indicator from '../indicator';

function Oportunites(props) {
  const { data } = props;

  return (
    <Card title="Oportunidades (7)">
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

export default Oportunites;
