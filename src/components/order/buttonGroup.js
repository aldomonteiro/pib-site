import React from 'react';
import ActionButton from '../actionButton'

const ButtonGroup = ({ enableButtons }) => {
  return (
    <div>
      <ActionButton enableButtons={enableButtons} text="Adicionar Novo Item" to={"/"} />
      <ActionButton enableButtons={enableButtons} text="Finalizar Pedido" to={"/pedido"} />
    </div>
  );
};

export default ButtonGroup;