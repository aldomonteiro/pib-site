import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';
import { reducer as formReducer } from 'redux-form'

export default function configureStore () {
  const reducers = combineReducers({
    redux: rootReducer,
    form: formReducer
  })

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}