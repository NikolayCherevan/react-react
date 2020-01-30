import React from "react";
import { Row, Col } from "antd";

import { Input } from "antd";
import Overview from "./../../Components/Overview";
import Count from "./../../Components/Counters";
import Projects from "./../../Components/Projects";
import Events from "../../Components/Events";
const { Search } = Input;

const Home = () => {
  return (
    <div className="home-section">
      <div className="main-title">      </div>
        <div style={{ padding: 24, minHeight: 360 }}>
          <Row className='home-row'>
            <Col className="wrapper1" span={8}>
              <h1 className="user-name"> Jessica</h1>
              <h1 className="username-under"> Individual </h1>
              <Search
                placeholder="Search"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <Count /> <br />
              <Overview />
            </Col>

            <Col className="wrapper2" span={8}>
              {" "}
              <Projects />
              <Events />
            </Col>
            <Col span={8}>col-8</Col>
          </Row>
        </div>

    </div>
  );
};

export default Home;

