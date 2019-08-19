/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    window.onerror = function errorHandlerTest(msg, file, line, col, error) {
      const errorObj = {
        msg,
        file,
        line,
        col,
        error,
      };
      console.log(errorObj);
    };
  }

  componentDidCatch(error, errorInfo) {
    let specificErrorMsg;
    if (errorInfo) {
      specificErrorMsg = (errorInfo.componentStack).split('\n')[1];
    }
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
      specificErrorMsg,
    }, () => {
      // You can also log error messages to an error reporting service here
      console.log(errorInfo.componentStack, 'this is the componentError that was logged');
    });
  }

  render() {
    const { errorInfo, error, specificErrorMsg } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <div className="container">
          <h2>Something went wrong.</h2>
          {error && error.toString()}
          <br />
          {specificErrorMsg}
          <br />
          <br />
          <br />
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
