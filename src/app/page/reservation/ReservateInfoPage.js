/**
 * Created by yangzhenyu on 2017/7/20.
 */
import React, { Component } from 'react';
import { Form, message, Select, Row, Col, Card, Tabs } from 'antd';
import {Patient } from '../../model/Patient';
import RegisterForm from './view/RegisterForm';
import ReservattionQueryTable from './view/ReservattionQueryTable'
const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class ClinicInfo extends Component {
    constructor(spec) {
        super(spec);
        this.patientLayer = new Patient();
    }

    onDateSelected(date) {
        this.patientLayer.getAllDataByState(1, (result)=>{
            this.refs.queryTable.updateState(result);
        });
    }

    onRegister(obj) {
        this.patientLayer.insertData(obj, (err)=>{
            if (!err) {
                message.success('挂号成功');
            } else {
                message.success('挂号失败，请检查数据库设置');
            }
        });
    }

    render() {
        return (
                <Row type="flex" justify="space-around">
                    <Col>
                        <Card title="新挂号患者" style={{ width: 350 }}>
                            <RegisterForm handleSubmit={this.onRegister.bind(this)}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="挂号列表" style={{ width: 450 }}>
                            <ReservattionQueryTable ref='queryTable'
                                                    onDateSelected={this.onDateSelected.bind(this)}/>
                        </Card>
                    </Col>
                </Row>
        );
    }

}
export default ClinicInfo;