import React, { useState } from "react";
import { graphql } from "gatsby";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout/layout";
import DetailsCard from '../components/detailsCard'
import NavButton from '../components/navButton';
import SEO from "../components/layout/seo";
import { format } from "../utils";

export default ({ data: { backend: { categoryOne } } }) => {
  const [selected, setSelected] = useState(null);
  const handleClick = object => {
    if (selected && object.id === selected.id)
      setSelected(null)
    else
      setSelected(object)
  }

  return (
    <Layout>
      <SEO title="Tamanhos" />
      <Container>
        {categoryOne.pricings.map(pricing =>
          <Row
            key={pricing.id}
            style={{
              backgroundColor: '#FFF',
              padding: '0.5em',
              margin: '0.5em'
            }}>
            <Col xs={12} md={12} sm={12} lg={6} >
              <DetailsCard
                selected={selected && selected.id === pricing.size.id}
                title={pricing.size.size}
                subTitle={format(pricing.price)}
                text={`Serve ${pricing.size.slices} pedaços`}
                to={`/divide/${pricing.size.size}`}
                object={{ ...pricing.size, price: pricing.price }}
                type="size"
                handleClick={handleClick}
              />
            </Col>
          </Row>
        )
        }
      </Container>
      {selected && <NavButton to={`/divide/${selected.size}`} object={selected} type="size" />}
    </Layout >
  );
};

// we can query the needed category according to the id passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query ($id: Float!, $pageId: String!) {
    backend {
      categoryOne(filter: {id: $id, pageId: $pageId}) {
        id
        name
        pageId
        pricings {
          id
          price
          size {
            id
            size
          }
        }
      }
    }
  }
`;