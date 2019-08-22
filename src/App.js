/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import loadable from '@loadable/component';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LMSAsyncTracker from './components/ErrorBoundary/LMSAsyncTracker';

class DynamicImport extends Component {
  state = {
    component: null,
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { load } = this.props;
    load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component,
        }));
      });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { component } = this.state;
    return children(component);
  }
}

const AsyncTest = (props) => (
  <DynamicImport load={() => import('./Test')}>
    {(Components) => (Components === null ? <p>Loading</p>
      : <Components {...props} />)}
  </DynamicImport>
);

const AsyncHome = (props) => (
  <DynamicImport load={() => import('./Test2')}>
    {(Components) => (Components === null ? <p>Loading</p>
      : <Components {...props} />)}
  </DynamicImport>
);

const Test3 = loadable(() => import('./Test3'));
const Test4 = loadable(() => import('./Test4'));

function App() {
  return (
    <ErrorBoundary>
      <LMSAsyncTracker>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="test">Test</Link></li>
            <li><Link to="test2">Alternative</Link></li>
            <li><Link to="test4">tracker</Link></li>
          </ul>
          <Dashboard />
          <Route path="/" exact component={AsyncHome} />
          <Route path="/test" exact component={AsyncTest} />
          <Route path="/test2" exact component={Test3} />
          <Route path="/test4" exact component={Test4} />
        </Router>
      </LMSAsyncTracker>
    </ErrorBoundary>
  );
}

export default App;
