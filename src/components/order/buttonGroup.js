import React from 'react';
import ActionButton from '../actionButton'

const ButtonGroup = ({ enableButtons, to1 = "/", to2 = "/pedido" }) => {
  return (
    <div>
      <ActionButton enableButtons={enableButtons} text="Adicionar Novo Item" to={to1} />
      <ActionButton enableButtons={enableButtons} text="Finalizar Pedido" to={to2} />
    </div>
  );
};

export default ButtonGroup;