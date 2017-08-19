/**
 * Created by yangzhenyu on 2017/8/4.
 */

import React, { Component } from 'react';
import {Card,Tabs} from 'antd';
import '../css/detail_content.css';
const TabPane = Tabs.TabPane;


class DetailContent extends Component {
    constructor(spec) {
        super(spec);
    }


    render() {
        return(
            <div className="div_content_parent">
                <Card title="历史病例" className="div_content_card">
                </Card>

                <Tabs defaultActiveKey="1" className='div_content_tab'>
                    <TabPane tab={<span>诊断报告</span>} key="1">
fff
                    </TabPane>

                    <TabPane tab={<span>患者自述</span>} key="2">

                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default DetailContent;