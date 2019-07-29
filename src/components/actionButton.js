import React from 'react';
import { navigate } from 'gatsby';
import Button from 'react-bootstrap/Button'

export default ({ text, enableButtons = true, to, variant = "primary" }) => {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <Button block size="lg" variant={enableButtons ? variant : "light"} disabled={!enableButtons} onClick={() => navigate(to)}>
        <h2>{text}</h2>
      </Button>
    </div>
  );
};

