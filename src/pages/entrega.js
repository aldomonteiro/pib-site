import React from "react";
import Container from 'react-bootstrap/Container';

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo"
import ButtonGroup from '../components/delivery/buttonGroup';

export default () => {
  return (
    <Layout>
      <SEO title="Dados de Entrega" />
      <Container fluid={true}>
        <ButtonGroup />
      </Container >
    </Layout >
  )
}