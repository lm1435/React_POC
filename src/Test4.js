import React, { Component } from 'react';
import axios from 'axios';
import fetchApi from './components/Services/projectservice';
import fetchApi2 from './components/Services/test-svc';

class Test4 extends Component {
  state = {
    test: null,
    test2: null,
    error: false,
  }

  componentDidMount() {
    this.response();
  }

  response = () => {
    axios.all([
      fetchApi({ critical: true }),
      fetchApi2(),
    ])
      .then(axios.spread((data1, data2) => this.setState({
        test: data1.data,
        test2: data2.data.results,
      })))
      .catch((err) => this.setState({
        error: err,
      }));
  }

  render() {
    const {
      test,
      test2,
      error,
    } = this.state;

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
              <h1>THIS IS RICHARD'S DATA</h1>
              {test.map((item) => (
                <div key={item.title.rendered} className="Content">
                  {' Title: '}
                  {item.title.rendered}
                  <br />
                </div>
              ))}
              <br />
            </div>
          ) : null
        }
        {test2 ? (
          <>
            <h1>THIS IS LUIS' DATA</h1>
            {test2.map((item) => (
              <div key={item.title} className="Content">
                {' Title: '}
                {item.title}
                <br />
              </div>
            ))}
          </>
        ) : null}
      </div>
    );
  }
}

export default Test4;
