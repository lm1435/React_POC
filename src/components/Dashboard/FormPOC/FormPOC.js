import React, { Component } from 'react';
import ThemeInput from '../../ThemeInput/ThemeInput';
import './FormPOC.css';
import FormValidation from './FormValidation';


// define all fields for formValidation;
const Fields = ['Age', 'FirstName', 'Email'];

export default class FormPOC extends Component {

  constructor() {
    super();
    this.state = {
      formValid: null,
      FirstName: '',
      Age: '',
      Email: '',
      errors: {
        Age: true,
        FirstName: true,
        Email: true,
      },
    };
  }

  onChangeHandler = (target) => {
    const { errorObj } = FormValidation;

    this.setState(({ errors }) => ({
      [target.name]: target.value,
      errors: { ...errors, ...errorObj(target) },
    }));
  }

  validateForm = (e) => {
    e.preventDefault();
  }

  validateFields = (e) => {
    e.preventDefault();
    const { errorObj } = FormValidation;
    let target = {};
    // define error obj
    let errors = {};
    let formValid = true;
    Fields.forEach((field) => {
      target = {
        // eslint-disable-next-line react/destructuring-assignment
        value: this.state[field],
        name: field,
      };

      // append new returned error obj
      errors = { ...errors, ...errorObj(target) };
      if (!errors[field]) {
        formValid = false;
      }
    });
    console.log(errors, formValid);
    this.setState({ errors, formValid }, () => this.onSubmit());
  }

  onSubmit=() => {
    const { formValid } = this.state;
    if (formValid) {
      console.log('submitted');
    } else {
      console.log('can\'t submit this');
    }
  }

  render() {
    const { FirstName, Age, errors } = this.state;
    return (
      <form>
        <ThemeInput
          name="FirstName"
          type="text"
          onChange={this.onChangeHandler}
          isValid={errors.FirstName}
          errorMsg="you must add a name!"
          placeholder="First Name"
        />
        <ThemeInput
          name="Age"
          type="number"
          onChange={this.onChangeHandler}
          isValid={errors.Age}
          errorMsg="bruh how old are you?!"
          placeholder="Age"
        />
        <ThemeInput
          name="Email"
          type="text"
          onChange={this.onChangeHandler}
          isValid={errors.Email}
          errorMsg="that email is no good!"
          placeholder="Email"
        />
        <p>
          Values:
          <br />
          {FirstName}
          <br />
          {Age}
        </p>
        <button type="submit" onClick={this.validateFields}>Submit Me</button>
      </form>
    );
  }
}
