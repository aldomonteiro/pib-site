import React from 'react';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Menu = ({ categories }) => {
  const categs = categories.map((category) =>
    category.flavors &&
    category.flavors.length > 0 &&
    '#categ-' + category.id);
  return (
    <Navbar collapseOnSelect className="flex-row" expand="md" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Cardápio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Scrollspy items={categs}>
            {categories && categories.map((category, index) =>
              category.flavors &&
              category.flavors.length > 0 &&
              <Nav.Link key={index} href={'#categ-' + category.id}>{category.name}</Nav.Link>
            )}
          </Scrollspy>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;