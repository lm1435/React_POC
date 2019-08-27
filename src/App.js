/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
// eslint-disable-next-line max-classes-per-file
import React from 'react';

import './App.css';
import ErrorBoundary from './components/ErrorBoundary/Error-Boundary';
import LMSAsyncTracker from './components/ErrorBoundary/LMSAsyncTracker';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

export default () => (
  <ErrorBoundary>
    <LMSAsyncTracker>
      <Header />
      <Sidebar />
    </LMSAsyncTracker>
  </ErrorBoundary>
);
