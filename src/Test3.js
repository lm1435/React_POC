import React, { Component } from 'react';
import fetchApi2 from './components/Services/test-svc';

class Test3 extends Component {
  state = {
    test: null,
    error: false,
  }

  componentDidMount() {
    this.response();
  }

  response = () => {
    fetchApi2()
      .then((res) => this.setState({
        test: res.data.results,
      }))
      .catch((error) => {
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
                <div>
                  {item.title}
                  <br />
                </div>
              ))}
              <br />
              <h1>imported with Loadable....WHHHHATTTT?!</h1>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Test3;
