import React, { useState } from "react";
import { graphql } from "gatsby";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout/layout";
import DetailsCard from '../components/detailsCard';
import SEO from "../components/layout/seo";
import NavButton from '../components/navButton';

export default ({ data: { backend: { sizeOne } } }) => {
  const [selected, setSelected] = useState(null);
  // Cria um array com as opções de split. Se split=3, cria um 
  // array com os valores [1, 2, 3].
  const splitOptions = [];
  for (let i = 1; i <= sizeOne.split; i++) {
    const description = {
      id: i,
      split: i,
      size: sizeOne.size,
      slices: sizeOne.slices,
    }
    splitOptions.push(description);
  }
  const handleClick = object => {
    if (selected && object.id === selected.id)
      setSelected(null)
    else
      setSelected(object)
  }
  return (
    <Layout>
      <SEO title="Nro de Sabores" />
      <Container>
        {splitOptions.map(split =>
          <Row
            key={split}
            style={{
              backgroundColor: '#FFF',
              padding: '0.5em',
              margin: '0.5em'
            }}>
            <Col xs={12} md={12} sm={12} lg={6} >
              <DetailsCard
                selected={selected && selected.id === split.id}
                title={split.split + (split.split === 1 ? ' Sabor' : ' Sabores')}
                to={`/sabores/${sizeOne.size}`}
                object={split}
                type="split"
                handleClick={handleClick}
              />
            </Col>
          </Row>
        )
        }
      </Container>
      {selected && <NavButton to={`/sabores/${selected.size}`} object={selected} type="split" />}
    </Layout >
  );
};

// we can query the needed category according to the id passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query ($id: Float!, $pageId: String!) {
    backend {
      sizeOne(filter: {id: $id, pageId: $pageId}) {
        id
        size
        split
        slices
      }
    }
  }
`;