import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './Dashboard.css';
import pendingtask from '../../images/pendingtask.png';
import managerEscalation from '../../images/manager-escalation.png';
import LRUIMG from '../../images/LRUImg.png';
import ChangeOfLaw from '../../images/ChangeOfLaw.png';
import MailImg from '../../images/MailImg.png';
import PendingPipelines from '../../images/queue.png';
import AuditsImg from '../../images/AuditsImg.png';
import DashboardItem from './DashboardItem';
import FormPOC from './FormPOC/FormPOC';

const dashboardStats = [
  {
    name: 'Pending Events',
    icon: pendingtask,
    count: 200,
  },
  {
    name: 'Pending Tasks',
    icon: pendingtask,
    count: 920,
  },
  {
    name: 'Manager Escalations',
    icon: managerEscalation,
    count: 0,
  },
  {
    name: 'You\'ve got event(s)',
    icon: pendingtask,
    count: 0,
  },
  {
    name: 'LRU SUSPENSE QUEUE',
    icon: LRUIMG,
    count: 2,
  },
  {
    name: 'YOU\'VE GOT MAIL',
    icon: MailImg,
    count: 0,
  },
  {
    name: 'Change Of Law',
    icon: ChangeOfLaw,
    count: 2,
  },
  {
    name: 'Pending Pipelines',
    icon: PendingPipelines,
    count: 4,
  },
  {
    name: 'AUDIT ITEMS',
    icon: AuditsImg,
    count: 465,
  },
];


export default class Dashboard extends Component {
  render() {
    return (
      <section id="Dashboard" className="dashboard">
        <div className="container">
          <div className="row">
            <header><h1>MY DASHBOARD</h1></header>
          </div>
          <div className="row dashboard__list">
            {dashboardStats.map((item) => (
              <ErrorBoundary key={item.name}>
                <DashboardItem key={item.name} data={item} onClickItem={this.onClickItem} />
              </ErrorBoundary>
            ))}
          </div>
          <div className="row">
            <FormPOC />
          </div>
        </div>
      </section>
    );
  }
}
