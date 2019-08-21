/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import axios from 'axios';
import LMSAsyncTracker from './LMSAsyncTracker';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
       error: false,
       spinnerrActive: null,
       };
  }

  componentDidMount() {
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      this.setState({ spinnerrActive: true });
      return config;
    }, (error) => {
      // Do something with request error
      return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
      this.setState({ spinnerrActive: false });
      return response;
    }, (error) => {
      Promise.reject(error);
      console.log(error);
      this.setState({ spinnerrActive: false });

    });

    window.onerror = function errorHandlerTest(msg, file, line, col, error) {
      const errorObj = {
        msg,
        error,
      };
      console.log(errorObj);
    };
  }

  componentDidCatch(error) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
    });
  }

  render() {
    const { error, spinnerrActive } = this.state;
    const { children } = this.props;
    if (error) {
      // Error path
      return (
        <div className="container">
          <h2>Something went wrong.</h2>
          {error && error.toString()}
          <br />
          <br />
          <br />
        </div>
      );
    }
    // Normally, just render children
    return (
      <div>
        <LMSAsyncTracker active={spinnerrActive} />
        { children }
      </div>
    );
  }
}
