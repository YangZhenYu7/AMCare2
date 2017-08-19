/**
 * Created by yangzhenyu on 2017/7/30.
 */

import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Calendar, Card, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class ReservattionQueryTable extends Component {
    state={
        registerData:[]
    };

    updateState(displayData) {
        this.setState({registerData:displayData});
    }

    onPanelChange(value) {
        this.props.onDateSelected(value);
    }

    getTabDataByKey(activeKey) {
        return this.state.registerData;
    }

    getDisplayText(obj) {
        return obj['name'];
    }

    getTabView(activeKey) {
        let data = this.getTabDataByKey();
        let result =[];
        for (let prop in data) {
          result.push(<Row> <Col>{this.getDisplayText(data[prop])}</Col></Row>);
        }
        return result;
    }

    render() {
        return (
        <fragment>
            <div style={{ width: 400, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false}
                          onPanelChange={this.onPanelChange.bind(this)}
                          onSelect={this.onPanelChange.bind(this)} />
            </div>

            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="frown" />待就诊</span>} key="1">
                    {this.getTabView('1')}
                </TabPane>

                <TabPane tab={<span><Icon type="frown-o" />确诊中</span>} key="2">
                    {/*{this.getTabView('2')}*/}
                </TabPane>
                <TabPane tab={<span><Icon type="meh" />已确诊</span>} key="3">
                    {/*{this.getTabView('3')}*/}
                </TabPane>
            </Tabs>
        </fragment>);
    }
}

export default ReservattionQueryTable;