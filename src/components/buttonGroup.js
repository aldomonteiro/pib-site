import React from 'react';
import OrderButton from './orderButton'

const ButtonGroup = ({ enableButtons }) => {
  return (
    <div>
      <OrderButton enableButtons={enableButtons} text="Adicionar Novo Item" to={"/"} />
      <OrderButton enableButtons={enableButtons} text="Finalizar Pedido" to={"/pedido"} />
    </div>
  );
};

export default ButtonGroup;