import React from 'react';
import { navigate } from 'gatsby';
import Button from 'react-bootstrap/Button'

export default ({ text, enableButtons = true, to }) => {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button block size="lg" disabled={!enableButtons} onClick={() => navigate(to)}>
        <h2>{text}</h2>
      </Button>
    </div>
  );
};

