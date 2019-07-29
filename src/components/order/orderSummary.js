import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ButtonGroup from './buttonGroup'
import ItemSummary from './itemSummary';
import { format } from '../../utils';

const OrderSummary = () => {
  const items = useSelector(state => state.items);
  let total = 0;
  items.forEach(element => {
    total += element.price;
  });

  return (
    <Card style={{ padding: '1rem' }}>
      <Card.Title>
        Resumo do Pedido
      </Card.Title>
      <Card.Subtitle className='mb-2 text-muted'>
        {`Total: ${format(total)}`}
      </Card.Subtitle>
      <Card.Body>
        {items.map(item =>
          <ItemSummary item={item} />
        )}
      </Card.Body>
      <Card.Footer>
        <ButtonGroup enableButtons={true} />
      </Card.Footer>
    </Card>
  )
};

export default OrderSummary;