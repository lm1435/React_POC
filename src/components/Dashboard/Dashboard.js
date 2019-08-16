import React,{ Component } from 'react';
import './Dashboard.css'
import PendingEvents from '../../images/pending-event.png';
import pendingtask from '../../images/pendingtask.png';
import managerEscalation from '../../images/manager-escalation.png';
import LRUIMG from '../../images/LRUImg.png';
import ChangeOfLaw from '../../images/ChangeOfLaw.png';
import MailImg from '../../images/MailImg.png';
import PendingPipelines from '../../images/queue.png';
import AuditsImg from '../../images/AuditsImg.png';

const dashboardStats = [
    {
      name: 'Pending Events',
      icon: PendingEvents,
      count: 200  
    },
    {
        name: 'Pending Tasks',
        icon: pendingtask,
        count: 920  
    },
    {
        name: 'Manager Escalations',
        icon: managerEscalation,
        count: 0  
    },
    {
        name: 'You\'ve got event(s)',
        icon: PendingEvents,
        count: 0  
    },
    {
        name: 'LRU SUSPENSE QUEUE',
        icon: LRUIMG,
        count: 2  
    },
    {
        name: 'YOU\'VE GOT MAIL',
        icon: MailImg,
        count: 0  
    },
    {
        name: 'Change Of Law',
        icon: ChangeOfLaw,
        count: 2  
    },
    {
        name: 'Pending Pipelines',
        icon: PendingPipelines,
        count: 4  
    },
    {
        name: 'AUDIT ITEMS',
        icon: AuditsImg,
        count: 465  
    }
  ];

export class Dashboard extends Component{
   
     constructor(props) {
        super(props);
        this.state = {
            count: 0
         }
    }
    onClickItem = () => {
        this.setState(({count})=>({
            count:count+1
        }));
    }
    render(){
        if (this.state.count === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        return (
            <section id="Dashboard" className="dashboard">
                <div className="container">
                    <div className="row">
                        <header><h1>MY DASHBOARD</h1></header>
                    </div>
                    <div className="row dashboard__list">
                        {dashboardStats.map((item,i)=>{
                            return <a key={i} onClick={this.onClickItem} href="#" className="col-md-6 col-lg-4 dashboard__item">
                                    <div className="flex justify-align-center">
                                        <img src={item.icon} />
                                        <span className="item__name">{item.name}</span>
                                    </div>
                                    <span className="item__stat">{item.count}</span>
                                </a>}
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
