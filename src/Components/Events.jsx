import React from "react";
import { Avatar } from "antd";
import Moment from 'react-moment';
const Events = () => {
    let newDate = new Date();
    const format = 'DD . MM';
    const dateToFormat = 'DD . MM';
  return (
    <section>
      <div className="wrapper-event">
        <div className="card-wrapper">
          <div className="card-header">
            <div className="avatar-name-wrapp">
              {" "}
              <Avatar shape="square" size="small" icon="user" />{" "}
              <span className="username"> Jessica </span>
            </div>{" "}
            <div className="date-wrapper"> <span className="data">   <Moment> {dateToFormat}</Moment></span> <span className="data2">   <Moment>{dateToFormat}</Moment></span></div>
           
          </div>
          <div className='event-desc'> Joined dsgn.work Platform </div> 
          <div className="card-boody"> </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
