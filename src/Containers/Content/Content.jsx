import React from "react";

import "antd/dist/antd.css";
import { Layout, Menu} from 'antd';
import "./style.scss";
import * as path from "../../Constants/routes";
import { Icon, InlineIcon } from '@iconify/react';
import diceD6 from '@iconify/icons-fa-solid/dice-d6';
import bxsCog from '@iconify/icons-bx/bxs-cog';
import layerGroup from '@iconify/icons-uil/layer-group';
import baselineBallot from '@iconify/icons-ic/baseline-ballot';
import {Link  } from "react-router-dom";
import { Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;




class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="0">
          <Avatar shape="square" icon="user" />
       
              <Link to = {path.ABOUT}> </Link>
            </Menu.Item>
            <Menu.Item key="1">
            <Icon icon={diceD6} />
      
              <Link to = {path.HOME}> </Link> 
            </Menu.Item>
            <Menu.Item key="2">
            <Icon icon={baselineBallot} />
   
              <Link to = {path.CREATEFLOW}> </Link>
            </Menu.Item>
            <Menu.Item key="9">
            <Icon icon={layerGroup} />
         
              <Link to = {path.FLOWS}> </Link>
            </Menu.Item>
            <Menu.Item key="10">
            <Icon icon={bxsCog} />
        
              <Link to = {path.SETTINGS}> </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}
           
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
