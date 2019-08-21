import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const appMin = () => {
    return ( 
      <ErrorBoundary>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="test">Test</Link></li>
                <li><Link to="test2">Alternative</Link></li>
              </ul>
            <Dashboard />
            <Route path="/" exact component={AsyncHome} />
            <Route path="/test" exact component={AsyncTest} />
            <Route path="/test2" exact component={Test3} />
          </Router>
      </ErrorBoundary>
    );
}
 
export default appMin;
