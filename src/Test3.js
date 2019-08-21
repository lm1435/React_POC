import React, { Component } from 'react';
import fetchApi from './components/Services/test-svc';

class Test3 extends Component {
  state = {
    test: null,
  }

  componentDidMount() {
    this.response();
  }

  response = async () => {
    fetchApi().then((res) => this.setState({
      test: res.data.results,
    }));
  }

  render() {
    const { test } = this.state;
    return (
      <>
        { test ? (
          <div className="App">
            {test.map((item) => (
              <div>
                {item.title}
                <br />
              </div>
            ))}
            <br />
            <h1>imported with Loadable....WHHHHATTTT?!</h1>
          </div>
        ) : null }
      </>
    );
  }
}

export default Test3;
