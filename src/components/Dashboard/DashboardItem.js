/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class DashboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onClickItem = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
    this.myFunc();
  }

  render() {
    const { count } = this.state;
    if (count === 2) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    const { data: { icon, name } } = this.props;
    return (
      <button type="button" onClick={this.onClickItem} className="col-md-6 col-lg-4 dashboard__item">
        <div className="flex justify-align-center">
          <img alt={name} src={icon} />
          <span className="item__name">{name}</span>
        </div>
        <span className="item__stat">{count}</span>
      </button>
    );
  }
}
