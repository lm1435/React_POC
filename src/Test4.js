import React, { Component } from 'react';
import fetchApi from './components/Services/projectservice';

class Test4 extends Component {
  state = {
    test: null,
    error: false,
  }

  componentDidMount() {
    this.response();
  }

  response = () => {
    fetchApi().then((res) => this.setState({
      test: res.data,
    })).catch((error) => {
      this.setState({
        error,
      });
    });
  }

  render() {
    const { test, error } = this.state;
    return (
      <div className="App">
        {
          // eslint-disable-next-line no-nested-ternary
          error ? (
            <div>
              <br />
              THERE WAS AN ERROR!! thats all the info we have for now.
              Also,
              <h1>imported with Loadable....WHHHHATTTT?!</h1>
              <br />
            </div>
          ) : test ? (
            <div>
              {test.map((item) => (
                <div className="Content">
                  {' Title: '}
                  {item.title.rendered}
                  <br />
                </div>
              ))}
              <br />
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Test4;
