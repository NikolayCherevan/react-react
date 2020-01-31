import React from "react";
import { Avatar } from "antd";
import Moment from "react-moment";

const EventsList = () => {
  let newDate = new Date();
  const format = "DD . MM";
  const dateToFormat = "DD . MM";
  let events = [
      'Start working',
      'Drop project',


  ]


    let listItems = events.map((event, i) => {
        return (
            <section key= {i}>
            <div className="wrapper-events">
              <div className="avatar-name-wrapp">
                {" "}
                <Avatar shape="square" size="small" icon="user" />{" "}
                <span className="username"> Jessica </span>
              </div>{" "}
              <div className="date-wrapper">
                {" "}
                <span className="data">
                  {" "}
                  <Moment> </Moment>
                </span>{" "}
                <span className="data2">
                  {" "}
                  <Moment>}</Moment>
                </span>
              </div>
            </div>
            <div className="event-desc"> {event}</div>
          </section>
        )
    }

 
  );

       
  
  
 
     
     

  return (
      <div> {listItems}</div>
  
  );
};
export default EventsList;
