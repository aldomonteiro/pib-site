import React from "react";
import { graphql } from "gatsby";
import Container from 'react-bootstrap/Container';

import Layout from "../components/layout/layout";
import Flavors from '../components/flavors';
import SEO from "../components/layout/seo";

export default ({ data: { backend: { sizeOne } } }) => {
  return (
    <Layout>
      <SEO title="Sabores" />
      <Container fluid={true}>
        <Flavors
          pricings={sizeOne.pricings} />
      </Container>
    </Layout >
  );
};

// we can query the needed category according to the id passed in the
// context property of createPage() in gatsby-node.js
export const query = graphql`
  query ($id: Float!, $pageId: String!)
  {
    backend {
      sizeOne (filter: {id:$id, pageId:$pageId}) {
        size
        pricings {
          id
          price
          category {
            id
            name
            flavors {
              id
              flavor
              toppingsNames {
                topping
              }
            }
          }
        }
      }
    }
  }
`;