import React from "react";
import { Avatar } from "antd";
import Moment from "react-moment";
import EventsList from "./EventsList"
import img from './../img/background-events.png'
const Events = () => {
  let newDate = new Date();
  const format = "DD . MM";
  const dateToFormat = "DD . MM";
  return (
    <section>
      <div className="wrapper-event">
        <div className="card-wrapper">
        
          <div className="card-boody">
            <EventsList />
         <div className='figure-wrapp'> <img src={img} alt='plans' />
         <span className='subtitle-event'> You’re all set!</span>
         
         </div>
             </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
