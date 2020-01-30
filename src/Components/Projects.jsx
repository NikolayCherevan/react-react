import React from "react";
import { List, Card } from 'antd';
import 'antd/dist/antd.css';
import { Icon, InlineIcon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import baselineHourglassEmpty from '@iconify/icons-ic/baseline-hourglass-empty';
const Projects = () => {
    const projects = [
        {
          title: '',
        },
        {
          title: '',
        },
        {
          title: '',
        },
        {
          title: '',
        },
        
      ]
    return (
        <section className="wrapper">
    <div className='overviews-section'>
<div className="title-wrapper"> 
<div className="title"> Projects </div>
<div className="subtitle"> View all</div></div>
<div className='projects-wrapper'> 
<Card className='adding-project-card'> <Icon icon={plusOutlined} /></Card>
<List
    grid={{ gutter: 16, column: 4 }}
    dataSource={projects}
    renderItem={item => (
      <List.Item>
        <Card >{item.title} <Icon icon={baselineHourglassEmpty} /></Card>
      </List.Item>
    )}
  />
  </div>
         </div>
         </section>
    )
}




export default Projects;