import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    }, () => {
      // You can also log error messages to an error reporting service here
      console.log(errorInfo.componentStack, 'this is the message that was logged');
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <div className="container">
          <iframe src="https://giphy.com/embed/26tPtM8Arb1nyc1i0" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen title="test" />
          <h2>Something went wrong.</h2>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
