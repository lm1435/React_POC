import React, { Component } from 'react';
import './form.css';

export default class FormLuis extends Component {
  state = {
    error: null,
    formControls: {
      name: {
        placeholder: 'enter your name',
        value: '',
        type: 'text',
        error: true,
      },
      email: {
        placeholder: 'enter your email',
        value: '',
        type: 'text',
        error: null,
      },
      age: {
        placeholder: 'enter your age',
        value: '',
        type: 'number',
        error: null,
      },
    },
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    const { formControls } = this.state;

    this.setState({
      formControls: {
        ...formControls,
        [name]: {
          ...formControls[name],
          value,
        },
      },
    });
  }

  sumbitForm = (e) => {
    e.preventDefault();
    this.setState({
      error: true,
    });
  }

  render() {
    const { error, formControls } = this.state;
    return (
      <>
        <form onSubmit={this.sumbitForm}>
          {error ? <h2>FIX THE ERRORS BRO</h2> : null}
          <input
            className={`${formControls.email.error ? 'error' : ''} input-container`}
            type="email"
            name="email"
            value={formControls.email.value}
            onChange={this.changeHandler}
            placeholder={formControls.email.placeholder} 
            
          />
          <br />
          <input
            className={`${formControls.name.error ? 'error' : ''} input-container`}
            type="text"
            name="name"
            value={formControls.name.value}
            onChange={this.changeHandler}
            placeholder={formControls.name.placeholder}
          />
          <br />
          <input
            className={`${formControls.age.error ? 'error' : ''} input-container`}
            type="number"
            name="age"
            value={formControls.age.value}
            onChange={this.changeHandler}
            placeholder={formControls.age.placeholder}
          />
          <br />
          <br />
          <br />
          <button type="submit">Submit Me</button>
        </form>
      </>
    );
  }
}
