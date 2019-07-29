import React from 'react';
import { useDispatch } from 'react-redux'
import { navigate } from 'gatsby';
import Button from 'react-bootstrap/Button';

import { ADD_ITEM, UPDATE_ITEM } from '../actions'

export default ({ to, object, type }) => {
  const dispatch = useDispatch();
  let action;
  if (type === 'flavor')
    action = ADD_ITEM;
  else
    action = UPDATE_ITEM

  return (
    <div style={{
      position: 'fixed',
      width: '100%',
      bottom: 0,
      left: 2,
      right: 3
    }}>
      <div style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }}>
        <Button onClick={() => {
          dispatch({ type: action, payload: { ...object, type: type } })
          navigate(to)
        }
        } variant="primary" size="lg" block>
          <h2>Próximo</h2>
        </Button>
      </div>
    </div>
  );
};
