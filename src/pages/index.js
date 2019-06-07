import React from "react"
import { Link, graphql } from "gatsby"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { backend: { categoryMany } } = data;
  console.log(categoryMany);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        {categoryMany.map((category, index) => {
          return category.flavors && category.flavors.length > 0 && (
            <Row key={index}>
              <Col md={12}>
                <Row>
                  <Col xs={12} md={12} sm={12}>
                    <h2>{category.name}</h2>
                  </Col>
                </Row>
                {category.flavors.map((flavor, index) =>
                  <>
                    <Row key={index}>
                      <Col xs={12} md={6} sm={6}>
                        <h4>{flavor.flavor}</h4>
                      </Col>
                      <Col xs={12} md={6} sm={6}>
                        {category.pricings && category.pricings.length > 0
                          ? category.pricings.map((pricing) => pricing.size.size + ' ' + formatter.format(pricing.price) + ' ')
                          : formatter.format(flavor.price)}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12} sm={12}>
                        <p>{flavor.toppingsNames.map((topping) => topping.topping + ',')}</p>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          )
        })}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    backend {
      categoryMany (filter:{pageId: "938611509676235"}) {
        id
        name
        flavors {
          id
          flavor
          price
          toppings
          toppingsNames {
            topping
          }
        }
        pricings {
          size {
            size
            shortening
          }
          price
        }
      }
    }
  }
`