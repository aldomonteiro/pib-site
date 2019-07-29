import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>{element}</Provider>
  );
}