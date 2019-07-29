import React from 'react';
import Card from 'react-bootstrap/Card';

export default ({ selected, title, subTitle, text, object, handleClick }) => {
  return (
    <Card
      bg={selected ? "primary" : "light"}
      text={selected ? "white" : "gray"}
      onClick={() => handleClick(object)}
      style={{ padding: '1rem' }}>
      <Card.Title>
        {title}
      </Card.Title>
      <Card.Subtitle className={`mb-2 ${!selected && "text-muted"}`}>
        {subTitle}
      </Card.Subtitle>
      {text && <Card.Text>
        {text}
      </Card.Text>}
    </Card >
  );
}