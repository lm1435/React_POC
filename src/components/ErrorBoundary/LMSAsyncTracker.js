import React, { Component } from 'react';
import axios from 'axios';
import './spinner.css';

export default class LMSAsyncTracker extends Component {
  state = { spinnerrActive: false }

  componentDidMount() {
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      this.setState({ spinnerrActive: true });
      return config;
    }, (error) => (
      // Do something with request error
      Promise.reject(error)
    ));

    axios.interceptors.response.use((response) => {
      this.setState({ spinnerrActive: false });
      return response;
    }, (error) => {
      Promise.reject(error);
      console.log(error);
      this.setState({ spinnerrActive: false });
    });
  }

  render() {
    const { spinnerrActive } = this.state;
    const { children } = this.props;
    return (
      <div>
        {spinnerrActive ? <div className="spinner"><span /></div> : null}
        { children }
      </div>
    );
  }
}
