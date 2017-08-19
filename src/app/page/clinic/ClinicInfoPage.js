/**
 * Created by yangzhenyu on 2017/7/21.
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class ClinicInfo extends Component {

    callback(key){
        console.log(key);
    }

    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                <TabPane tab="诊所基本信息" key="1"></TabPane>
                <TabPane tab="诊所收款信息设置" key="2"></TabPane>
                <TabPane tab="诊所微信管理" key="3"></TabPane>
            </Tabs>
        );
    }
}

export default ClinicInfo;