import React from 'react';
import Toast from 'react-bootstrap/Toast';

const Notification = ({ title, description, show, setShow }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        right: 0,
        zIndex: 11000,
      }}>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Notification;