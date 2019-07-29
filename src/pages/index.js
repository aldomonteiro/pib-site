import React, { useState } from "react"
import { graphql } from "gatsby"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import DetailsCard from '../components/detailsCard'
import Menu from "../components/menu";
import NavButton from '../components/navButton';
import { st_h2 } from '../styles'
import { format } from '../utils'

const IndexPage = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const { backend: { categoryMany } } = data;
  const handleClick = object => {
    if (selected && object.id === selected.id)
      setSelected(null)
    else
      setSelected(object)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid={true}>
        <Menu categories={categoryMany} />
        {categoryMany.map(category =>
          category.flavors && category.flavors.length > 0 && (
            // Used by Menu
            <section key={category.id} id={'categ-' + category.id}>
              <Row>
                <Col md={12}>
                  <h2 style={st_h2}>{category.name}</h2>
                  {category.flavors.map(flavor =>
                    <DetailsCard key={flavor.id}
                      selected={selected && selected.id === flavor.id}
                      title={flavor.id + ' - ' + flavor.flavor}
                      subTitle={category.pricings.map(pricing => pricing.size.shortening + ' - ' + format(pricing.price)).join(', ')}
                      text={flavor.toppingsNames.map(topping => topping.topping).join(', ')}
                      object={{ ...flavor, categoryId: category.id, name: category.name }}
                      type="flavor"
                      to={`/tamanhos/${category.name}`}
                      handleClick={handleClick}
                    />
                  )}
                </Col>
              </Row>
            </section>
          )
        )}
      </Container >
      {selected && <NavButton to={`/tamanhos/${selected.name}`} object={selected} type="flavor" />}
    </Layout >
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ($pageId: String!)
  {
    backend {
      categoryMany (filter: { pageId: $pageId }) {
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
            split
          }
          price
        }
      }
    }
  }
`