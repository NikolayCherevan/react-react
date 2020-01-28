import React from "react";
import { Progress } from 'antd';



const Overview = () => {
    return (
        <section className="wrapper">
    <div className='overviews-section'>
        <h1 className="Overview-title"> Overview </h1>
        <div className="Overview-subtitle"> Overview </div>
        <Progress type="circle" percent={30} />
        
         </div>
         </section>
    )
}




export default Overview;