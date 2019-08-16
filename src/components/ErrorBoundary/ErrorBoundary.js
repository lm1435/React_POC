import React,{ Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
        console.log('this is the message that was logged');
      }
      
      render() {
        if (this.state.errorInfo) {
          // Error path
          return (
            <div className="container">
              <h2>Something went wrong.</h2>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </div>
          );
        }
        // Normally, just render children
        return this.props.children;
      }  
  }

  export default ErrorBoundary;