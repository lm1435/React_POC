import React, { Component } from 'react';
import axios from 'axios';
import './spinner.css';

export default class LMSAsyncTracker extends Component {
  state = {
    promiseTrackerArr: [],
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
      }, () => console.log(this.state.promiseTrackerArr));
      return config;
    }, (error) => (
      // Do something with request error
      Promise.reject(error)
    ));

    // axios.interceptors.response.use((response) => {
    //   console.log(response, 'aqui');
    //   const { promiseTrackerArr } = this.state;
    //   this.setState({ promiseTrackerArr: [] });
    //   return response;
    // }, (error) => {
    //   const { promiseTrackerArr } = this.state;
    //   Promise.reject(error);
    //   this.setState({ promiseTrackerArr: [] });
    // });
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
