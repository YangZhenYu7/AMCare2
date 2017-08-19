/**
 * Created by yangzhenyu on 2017/7/20.
 */

import React, { Component } from 'react';
import {Timeline } from 'antd';

class About extends Component {
    render() {
        return(
            <Timeline>
                <Timeline.Item>
                    <p>2017.7.7 项目立案</p>
                </Timeline.Item>
                <Timeline.Item color="red">
                    <p>2017.7.20 项目开始开发</p>
                </Timeline.Item>
            </Timeline>
        );
    }
}

export default About;