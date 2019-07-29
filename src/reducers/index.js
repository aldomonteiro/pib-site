import * as actions from '../actions';

const defaultState = [];

export default (previousState = defaultState, { type, payload }) => {
  switch (type) {
    // ADD_ITEM é chamado apenas por flavor.
    case actions.ADD_ITEM:
      const item = {
        id: 1,
        flavors: [payload],
        size: null,
        split: 1,
        price: payload.price
      }
      // se já existem items no store, adiciona um novo item com um id maior
      if (previousState.items && previousState.items.length > 0) {
        item.id = previousState.items.length + 1;

        return {
          ...previousState,
          items: [...previousState.items, item],
          currentItem: item.id,
        };
      }
      else
        return {
          ...previousState,
          items: [item],
          currentItem: item.id
        };
    case actions.UPDATE_ITEM:
      // seleciona o item a ser atualizado
      const currentItem = previousState.currentItem;
      // find returns only 1 element
      const touchedItem = previousState.items.find(el => el.id === currentItem);
      if (touchedItem) {
        // atualiza a informação que vem no payload
        if (payload.type === 'size') {
          touchedItem.size = payload;
          touchedItem.price = payload.price;
        } else if (payload.type === 'split') {
          touchedItem.split = payload.split;
          touchedItem.flavors.forEach(flavor => flavor.price = touchedItem.price / payload.split)
        } else if (payload.type === 'flavors') {
          let total = 0;
          payload.flavors.forEach(flavor => {
            flavor.price = flavor.price / touchedItem.split
            total += flavor.price;
          })
          touchedItem.flavors = payload.flavors;
          touchedItem.price = total;
        }
        // refaz o array com os itens não atualizados e o item atualizado.
        const untouchedItems = previousState.items.filter(el => el.id !== currentItem);
        return {
          ...previousState,
          items: [...untouchedItems, touchedItem]
        }
      } else return previousState;
    case actions.REMOVE_ITEM:
      if (previousState.items && previousState.items.length > 0)
        return {
          ...previousState,
          items: previousState.items.filter(el => el.id !== payload.id)
        };
      else
        return previousState;
    default:
      return previousState;
  }
}