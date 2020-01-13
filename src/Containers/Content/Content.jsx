import React from "react";

import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import "./style.scss";
import * as path from "../../Constants/routes";

import {Link  } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {

  render() {
    console.log(this.props.children)
    return (
      
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
          }}
          onCollapse={(collapsed, type) => {
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
                <Link to={path.ABOUT}>
              About me
                </Link>
             
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
            
                <Link to={path.PROJECTS}>
                My projects 
                </Link>
             
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
 
                <Link to={path.REVIEWS}>
            Reviews 
                </Link>{" "}
             
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
          
                {" "}
                <Link to={path.CONTACTS}>
                  Contacts 
                </Link>
            
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header> Test </Header>
          <Content style={{ margin: "24px 16px 0" }}>
          {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
        
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
