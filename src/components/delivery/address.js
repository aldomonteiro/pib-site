import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// The props will be passed by redux-form.
const CustomFormControl = (props) => (
  <Form.Control
    name='email'
    placeholder={props.placeholder}
    value={props.input.value}
    onChange={props.input.onChange}
    {...props}
  />
);

let AddressForm = ({ handleSubmit }) => {
  const [validated, setValidated] = useState(false);

  const internalSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      handleSubmit(event);
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={internalSubmit}>
      <Form.Group controlId="formBasicAddress">
        <Form.Label>Endereço</Form.Label>
        {/* <Form.Control type="text" placeholder="Informe seu endereço completo" required /> */}
        <Field name="address" component={CustomFormControl} required type="text" placeholder="Informe seu endereço completo" />
        <Form.Control.Feedback type="invalid">
          Por favor informe o seu endereço.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        {/* <Form.Control type="text" placeholder="Qual é o seu nome?" /> */}
        <Field name="name" component={CustomFormControl} type="text" required placeholder="Qual é o seu nome?" />
        <Form.Control.Feedback type="invalid">
          Por favor informe o seu nome.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Telefone</Form.Label>
        {/* <Form.Control type="text" placeholder="Telefone de contato" /> */}
        <Field name="phone" component={CustomFormControl} type="tel" pattern="\([0-9]{2}\) {0,1}[0-9]{4,6}-[0-9]{3,4}$" required placeholder="Informe o seu telefone de contato" />
        <Form.Control.Feedback type="invalid">
          Informe o seu telefone com DDD.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="light" type="submit" size="lg">
        <h4>Continuar</h4>
      </Button>
    </Form>
  );
};

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)


export default AddressForm;