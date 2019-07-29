import React from 'react';
import ActionButton from '../actionButton'

const ButtonGroup = ({ enableButtons }) => {
  return (
    <div>
      <ActionButton enableButtons={enableButtons} text="Entrega" to={"/"} />
      <ActionButton enableButtons={enableButtons} text="Retira no Balcão" to={"/pedido"} />
    </div>
  );
};

export default ButtonGroup;