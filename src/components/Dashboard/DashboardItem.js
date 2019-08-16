import React,{ Component } from 'react';

export class DashboardItem extends Component{
   
 
render(){
    const {data:{icon,name,count}, onClickItem } = this.props;
    return <button onClick={onClickItem} href="" className="col-md-6 col-lg-4 dashboard__item">
      <div className="flex justify-align-center">
          <img alt={name} src={icon} />
          <span className="item__name">{name}</span>
        </div>
        <span className="item__stat">{count}</span>
      </button>
      }
}