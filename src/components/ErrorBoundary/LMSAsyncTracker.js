import React from 'react';
import './spinner.css';


const LMSAsyncTracker = ({ active }) => (active ? <div className="spinner"><span /></div> : null);

export default LMSAsyncTracker;
