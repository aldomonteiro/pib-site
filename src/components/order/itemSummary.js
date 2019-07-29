import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from '../../utils';

const ItemSummary = ({ item }) => {
  return item &&
    <Card style={{ padding: '1rem' }}>
      <Card.Title>
        {`Pizza ${item.size.size} ${item.split} ${item.split > 1 ? 'sabores' : 'sabor'}`}
      </Card.Title>
      <Card.Subtitle className={`mb-2 text-muted`}>
        {`Total: ${format(item.price)}`}
      </Card.Subtitle>
      <Card.Text>
        {item.flavors.map(flavor => <>{`${flavor.flavor} - ${format(flavor.price)} `}<br /></>)}
      </Card.Text>
    </Card >
};

export default ItemSummary