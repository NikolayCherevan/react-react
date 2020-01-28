import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import bezierCurve from '@iconify/icons-fa-solid/bezier-curve';
import layerGroup from '@iconify/icons-uil/layer-group';
import bxBullseye from '@iconify/icons-bx/bx-bullseye';
import usersAlt from '@iconify/icons-uil/users-alt';
import { Row, Col } from 'antd';

import { Card } from 'antd';

const Count = () => {
    return (
        <section className="wrapper">
        <div className='card-wrapper' style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card  bordered={false}>
            <Icon icon={layerGroup} />
            <div className='count-name'> Projects </div>
            <div className='count-number'> 22</div>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
            <Icon icon={bezierCurve} />
            <div className='count-name'> Flows </div>
            <div className='count-number'> 31</div>

            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
            <Icon icon={usersAlt} />
            <div className='count-name'> Invitees </div>
            <div className='count-number'> 14</div>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
              <Icon icon={bxBullseye} />
              <div className='count-name'> Goals </div>
            <div className='count-number'> 12</div>
            </Card>
          </Col>
        </Row>
      </div>

      </section>
    )
}




export default Count;