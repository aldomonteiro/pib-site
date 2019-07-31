import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../components/layout/layout";
import SEO from "../components/layout/helmet"

export default () => {
  const [money, setMoney] = useState(false);
  const [card, setCard] = useState(false);

  return (
    <Layout>
      <div style={{ backgroundColor: "white" }}>
        <SEO title="Forma de Pagamento" />
        <Container fluid={true}>
          <Row>
            <Col xs="6">
              <Button
                variant={money ? "primary" : "light"}
                size="lg"
                block
                onClick={() => { setCard(false); setMoney(true) }}>
                <h3>Dinheiro</h3>
              </Button>
            </Col>
            <Col xs="6">
              <Button
                variant={card ? "primary" : "light"}
                size="lg"
                block
                onClick={() => { setCard(true); setMoney(false) }}>
                <h3>Cartão</h3>
              </Button>
            </Col>
          </Row>
        </Container >
      </div>
    </Layout >
  )
}