import React from "react";
import Container from 'react-bootstrap/Container';

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo"
import OrderSummary from "../components/orderSummary";

export default () => {
  return (
    <Layout>
      <SEO title="Detalhes do Pedido" />
      <Container fluid={true}>
        <OrderSummary />
      </Container >
    </Layout >
  )
}