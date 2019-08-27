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

  onChangeHandler = (e) => {
    const { isEmpty, isValidEmail } = FormValidation;
    const errorObj = {};
    
    errorObj[e.name] = isEmpty(e.value);

    this.setState(({ errors }) => ({
      [e.name]: e.value,
      errors: { ...errors, ...errorObj },
    }));
  }

  validateFields = (e) => {
    e.preventDefault();
    const { isEmpty, isValidEmail } = FormValidation;
    const errors = {};
    let formValid = true;
    Fields.forEach((field) => {
      // eslint-disable-next-line react/destructuring-assignment
      const value = this.state[field];
      switch (field) {
        case 'Email':
          errors[field] = isValidEmail(value) && isEmpty(value);
          break;
        default:
          errors[field] = isEmpty(value);
      }
      if (!errors[field]) {
        formValid = false;
      }
    });
    console.log(errors, formValid);
    this.setState({ errors, formValid }, () => {
      this.onSubmit();
    });
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
