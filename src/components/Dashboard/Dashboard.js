import React, { Component } from 'react';
import './Dashboard.css';
// import pendingtask from '../../images/pendingtask.png';
// import managerEscalation from '../../images/manager-escalation.png';
// import LRUIMG from '../../images/LRUImg.png';
// import ChangeOfLaw from '../../images/ChangeOfLaw.png';
// import MailImg from '../../images/MailImg.png';
// import PendingPipelines from '../../images/queue.png';
// import AuditsImg from '../../images/AuditsImg.png';
import DashboardItem from './DashboardItem';

const dashboardStats = [
  {
    name: 'Pending Events',
    icon: require('../../images/pending-event.png'),
    count: 200,
  },
  {
    name: 'Pending Tasks',
    icon: require('../../images/pendingtask.png'),
    count: 920,
  },
  {
    name: 'Manager Escalations',
    icon: require('../../images/manager-escalation.png'),
    count: 0,
  },
  {
    name: 'You\'ve got event(s)',
    icon: require('../../images/pending-event.png'),
    count: 0,
  },
  {
    name: 'LRU SUSPENSE QUEUE',
    icon: require('../../images/LRUImg.png'),
    count: 2,
  },
  {
    name: 'YOU\'VE GOT MAIL',
    icon: require('../../images/MailImg.png'),
    count: 0,
  },
  {
    name: 'Change Of Law',
    icon: require('../../images/ChangeOfLaw.png'),
    count: 2,
  },
  {
    name: 'Pending Pipelines',
    icon: require('../../images/queue.png'),
    count: 4,
  },
  {
    name: 'AUDIT ITEMS',
    icon: require('../../images/AuditsImg.png'),
    count: 465,
  },
];


export class Dashboard extends Component {
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
  }

  render() {
    const { count } = this.state;
    if (count === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    console.log(process.env);

    return (
      <section id="Dashboard" className="dashboard">
        <div className="container">
          <div className="row">
            <header><h1>MY DASHBOARD</h1></header>
          </div>
          <div className="row dashboard__list">
            {dashboardStats.map((item, i) => <DashboardItem key={i} data={item} onClickItem={this.onClickItem} />)}
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
