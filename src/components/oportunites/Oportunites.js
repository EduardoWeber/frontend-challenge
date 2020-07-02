import React from 'react';
import styles from './Oportunites.module.css';
import Card from '../card';
import Indicator from '../indicator';

function Oportunites(props) {
  return (
    <Card title="Oportunidades (7)">
      <div className={styles.indicatorGrid}>
        <Indicator
          value="4"
          title="Ganhas"
          subtitle="R$ 20.000,00"
          color="green"
        />
        <Indicator
          value="1"
          title="Perdida"
          subtitle="R$ 4.300,00"
          color="red"
        />
        <Indicator
          value="2"
          title="Abertas"
          subtitle="Diversas moedas"
          color="blue"
        />
        <Indicator value="0" title="Descartes" subtitle="--" color="grey" />
      </div>
    </Card>
  );
}

export default Oportunites;
