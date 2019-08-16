/* eslint-disable react/prop-types */
import React from 'react';

const DashboardItem = ({ data: { icon, name, count }, onClickItem }) => (
  <button type="button" onClick={onClickItem} href="" className="col-md-6 col-lg-4 dashboard__item">
    <div className="flex justify-align-center">
      <img alt={name} src={icon} />
      <span className="item__name">{name}</span>
    </div>
    <span className="item__stat">{count}</span>
  </button>
);

export default DashboardItem;
