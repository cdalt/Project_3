import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import App from "./App.js";

const UserForm = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
    passwordErrors,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;

    if (errors.length) {
      errorsDisplay = (
        <React.Fragment>
          <ValidationLabel>Errors:</ValidationLabel>
          <ValidationUl>
            {errors.map((errpr, i) => (
              <li key={i}>{error}</li>
            ))}
          </ValidationUl>
        </React.Fragment>
      );
    }
    return errorsDisplay;
  }

  return (
    <>
      <ErrorsDisplay errors={error} passwordErrors={passwordErrors} />
      <Form onSubmit={handleSubmit}>
        {elements()}

        <Button className="mr-1" variant="primary" type="submit">
          {submitButtonText}
        </Button>

        <Button className="mr-1" variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </>
  );

  <UserForm
    cancel={this.cancel}
    errors={errors}
    submit={this.submit}
    passwordErrors={confirmed}
    submitButtonText="Sign In"
    elements={() => (
      <React.Fragment>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="name@example.com"
            onChange={this.change}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.change}
          />
        </Form.Group>
      </React.Fragment>
    )}
  />;
};

export default Form;
