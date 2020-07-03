import React from 'react';
import GeneralInfo from '../../components/GeneralInfo';
import Opportunities from '../../components/Opportunities';
import CreditLimit from '../../components/CreditLimit';
import FinancialSecurities from '../../components/FinancialSecurities';
import Activities from '../../components/Activities';
import SalesChart from '../../components/SalesChart';
import { Container, Row, Col } from 'react-grid-system';
import MapLocation from '../../components/MapLocation/MapLocation';

function Home() {
  const json = require('../../json.json');

  return (
    <Container fluid>
      <Row nogutter>
        <Col lg={12} xl={6}>
          <Row nogutter>
            <Col sm={12} md={6}>
              <GeneralInfo data={json['userInfo']} />
            </Col>
            <Col sm={12} md={6}>
              <MapLocation data={json['userInfo']['location']} />
            </Col>
          </Row>
          <Row nogutter>
            <Col sm={12} md={6}>
              <Opportunities data={json['oportunities']} />
            </Col>
            <Col sm={12} md={6}>
              <CreditLimit data={json['creditLimit']} />
            </Col>
          </Row>
          <Row nogutter>
            <Col sm={12} md={6}>
              <SalesChart data={json['sales']} />
            </Col>
            <Col sm={12} md={6}>
              <FinancialSecurities data={json['financialSecurities']} />
            </Col>
          </Row>
        </Col>
        <Col lg={12} xl={6}>
          <Activities data={json['activities']} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
