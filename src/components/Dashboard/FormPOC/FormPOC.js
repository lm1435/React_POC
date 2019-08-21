import React, { Component } from 'react';
import ThemeInput from '../../ThemeInput/ThemeInput';
import './FormPOC.css';

const Fields = ['Age', 'FirstName'];

export default class FormPOC extends Component {
  constructor() {
    super();
    this.state = {
      formValid: null,
      FirstName: '',
      Age: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.name]: e.value,
    });
  }

  onSubmit=(e) => {
    e.preventDefault();
    const { formValid } = this.state;
    if (formValid) {
      console.log('submitted');
    } else {
      console.log('can\'t submit this');
    }
  }

  render() {
    const { FirstName, Age } = this.state;
    return (
      <form>
        <ThemeInput
          name="FirstName"
          type="text"
          onChange={this.onChangeHandler}
          isValid={false}
          errorMsg="you must add a name!"
          placeholder="First Name"
        />
        <ThemeInput
          name="Age"
          type="number"
          onChange={this.onChangeHandler}
          isValid={false}
          errorMsg="bruh how old are you?!"
          placeholder="Age"

        />
        <p>
          Values:
          <br />
          {FirstName}
          <br />
          {Age}
        </p>
        <button type="submit" onClick={this.onSubmit}>Submit Me</button>
      </form>
    );
  }
}
