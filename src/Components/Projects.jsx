import React,  {useState} from "react";
import { List, Card } from 'antd';
import 'antd/dist/antd.css';
import { Icon, InlineIcon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import baselineHourglassEmpty from '@iconify/icons-ic/baseline-hourglass-empty';
import useComponentVisible from './CkickOutside';
import FormLayoutDemo from './PopupCreacteProject'
import closeSharp from '@iconify/icons-ion/close-sharp';
const Projects = () => {
  const [visibility, SetVisibility] = useState(false)
  
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
        <section className ={visibility === true? 'wrapper-overlay':'wrapper'}>
    <div className='overviews-section'>
<div className="title-wrapper"> 
<div className="title"> Projects </div>
<div className="subtitle"> View all</div></div>
<div className='projects-wrapper'> 

<Card className='adding-project-card' onClick={() => {  SetVisibility(true)} }> <Icon icon={plusOutlined} /></Card>
<List
    grid={{ gutter: 16, column: 4 }}
    dataSource={projects}
    renderItem={item => (
      <List.Item>
        <Card >{item.title} <Icon icon={baselineHourglassEmpty} /></Card>
      </List.Item>
    )}
  />
  <div className ={visibility === true? 'popup-project':'popup-project-hide'} > 
  <FormLayoutDemo />
  <button className ='close-popup' onClick={() => SetVisibility(false)}><Icon icon={closeSharp} /> </button></div>
  </div>
         </div>
         </section>
    )
}




export default Projects;