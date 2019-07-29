import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ItemSummary from './itemSummary';
import ButtonGroup from './buttonGroup';
import Notification from '../notification'
import { format } from '../../utils';
import { UPDATE_ITEM } from '../../actions'


const Flavors = ({ pricings }) => {
  const currentItem = useSelector(state => state.currentItem);
  const item = useSelector(state => state.items).find(el => el.id === currentItem);
  const [selecteds, setSelecteds] = useState([]);
  const [showNotif, setShowNotif] = useState(false);
  const dispatch = useDispatch();
  const activeCategory = item.flavors[0].categoryId;

  useEffect(() => {
    if (item.flavors)
      setSelecteds([item.flavors[0].id])
  }, []);

  // mostra a categoria ativa a categoria do sabor escolhido na primeira tela.
  // mostra o sabor selecionado como um dos sabores selecionados

  const handleChange = val => {
    let newSelecteds = [];
    if (selecteds.indexOf(val) > -1) {
      newSelecteds = selecteds.filter(el => el !== val);
      setSelecteds(newSelecteds);
    } else {
      if (selecteds.length >= item.split) {
        newSelecteds = selecteds;
        setShowNotif(true);
      }
      else {
        newSelecteds = [val, ...selecteds];
        setSelecteds([val, ...selecteds]);
      }
    }

    const newFlavorsArr = []
    newSelecteds.map(id => {
      pricings.map(pricing => {
        const flavor = pricing.category.flavors.find(flavor => flavor.id === id);
        if (flavor) {
          newFlavorsArr.push({ ...flavor, price: pricing.price });
        }
      })
    });
    if (newFlavorsArr.length !== item.flavors.length)
      dispatch({ type: UPDATE_ITEM, payload: { type: 'flavors', flavors: newFlavorsArr } });
  }

  return (
    <>
      <div style={{ height: '60vh', overflow: 'auto', margin: '0.5rem' }}>
        <Card>
          <Card.Title style={{ padding: '1rem 0rem 0rem 1rem' }}>
            {`Escolha ${item.split} sabores`}
          </Card.Title>
          <Card.Body>
            <Accordion defaultActiveKey={activeCategory}>
              {pricings.map(pricing =>
                <Card key={pricing.id}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={pricing.category.id}>
                      {pricing.category.name}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={pricing.category.id}>
                    <Card.Body>
                      {pricing.category.flavors.map(flavor =>
                        <Card
                          key={flavor.id}
                          bg={selecteds.indexOf(flavor.id) > -1 ? "primary" : "light"}
                          text={selecteds.indexOf(flavor.id) > -1 ? "white" : "gray"}
                          style={{ padding: '1rem' }}
                          onClick={() => handleChange(flavor.id)}>
                          <Card.Title>
                            {flavor.flavor}
                          </Card.Title>
                          <Card.Subtitle className={`mb-2 ${selecteds.indexOf(flavor.id) === -1 && "text-muted"}`}>
                            {format(pricing.price)}
                          </Card.Subtitle>
                          <Card.Text>
                            {flavor.toppingsNames.map(topping => topping.topping).join(', ')}
                          </Card.Text>
                        </Card>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )}
            </Accordion>
          </Card.Body>
        </Card>
        <Notification
          title="Número de sabores"
          description="Você já escolheu todos os sabores"
          show={showNotif}
          setShow={setShowNotif}
        />
      </div>
      <div style={{ height: '30vh', overflow: 'auto', margin: '0.5rem' }}>
        <ItemSummary item={item} />
        <ButtonGroup enableButtons={true} />
      </div>
    </>
  )
}

export default Flavors;