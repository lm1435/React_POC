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
        error,
      };
      console.log(errorObj);
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
    }, () => {
      // You can also log error messages to an error reporting service here
      console.log(errorInfo.componentStack, 'this is the componentError that was logged');
    });
  }

  render() {
    const { error } = this.state;
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
    return children;
  }
}

export default ErrorBoundary;
