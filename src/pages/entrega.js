import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import Layout from "../components/layout/layout";
import SEO from "../components/layout/helmet"
import Address from "../components/delivery/address";


export default () => {
  const [delivery, setDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const submit = values => {
    console.log(values);
  }
  return (
    <Layout>
      <div style={{ backgroundColor: "white" }}>
        <SEO title="Dados de Entrega" />
        <Container fluid={true}>
          <Button
            variant={delivery ? "primary" : "light"}
            size="lg"
            block
            onClick={() => { setPickup(false); setDelivery(true) }}>
            <h2>Entrega</h2>
          </Button>
          <Button
            variant={pickup ? "primary" : "light"}
            size="lg"
            block
            onClick={() => { setPickup(true); setDelivery(false) }}>
            <h2>Retira no Balcão</h2>
          </Button>
          {delivery && <Address onSubmit={submit} />}
        </Container >
      </div>
    </Layout >
  )
}