import React, { Component } from 'react';
import axios from 'axios';
import './spinner.css';

export default class LMSAsyncTracker extends Component {
  state = {
    promiseTrackerArr: [],
    error: false,
  }

  componentDidMount() {
    axios.interceptors.request.use((config) => {
      let isCriticalPromise = false;
      if (config && config.data && config.data.critical) {
        isCriticalPromise = true;
        if (config.method === 'get') {
          config.data = null;
        }
      }
      // Do something before request is sent
      const { promiseTrackerArr } = this.state;
      this.setState({
        promiseTrackerArr: [
          ...promiseTrackerArr,
          {
            url: config.url,
            critical: isCriticalPromise,
            method: config.method,
          },
        ],
      });
      return config;
    }, (error) => (
      // Do something with request error
      Promise.reject(error)
    ));

    axios.interceptors.response.use((response) => {
      const { promiseTrackerArr } = this.state;

      if (response && response.config && response.config.url) {
        this.setState({
          promiseTrackerArr: promiseTrackerArr.filter((item) => item.url !== response.config.url),
        });
      }
      return response;
    }, (err) => {
      // const { promiseTrackerArr, error } = this.state;
      Promise.reject(err);
      // this.setState({ promiseTrackerArr: [] });
    });
  }

  render() {
    const { promiseTrackerArr } = this.state;
    const { children } = this.props;
    return (
      <div>
        {promiseTrackerArr.length ? <div className="spinner"><span /></div> : null}
        { children }
      </div>
    );
  }
}
