/**
 * Created by yangzhenyu on 2017/7/31.
 */

import React, { Component } from 'react';
import {Table, Form,Row, Col, Input, Button, Select} from 'antd';
import * as PatientM from '../../../model/Patient';
import * as DiagnoseM from '../../../model/Diagnose';
import "../css/query_table.css";
const FormItem = Form.Item;
const Option = Select.Option;

class AdvancedSearchForm extends React.Component {
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.props.onSearch(values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
        };

        return (
            <Form
                className="search_form"
                onSubmit={this.handleSearch}>
                <Row gutter={40}>
                    <Col span={8} key={0}  >
                        <FormItem {...formItemLayout} label={'就诊状态'}>
                            {getFieldDecorator('state')(
                                <Select placeholder="全部">
                                    <Option value={null}>全部</Option>
                                    <Option value={DiagnoseM.reservation}>待就诊</Option>
                                    <Option value={DiagnoseM.diagnosing}>就诊中</Option>
                                    <Option value={DiagnoseM.diagnosed}>已诊断</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8} key={1}  >
                        <FormItem {...formItemLayout} label={'主治医生'}>
                            {getFieldDecorator('doctor')(
                                <Input placeholder=" " />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8} key={2}  >
                        <FormItem {...formItemLayout} label={'搜索患者'}>
                            {getFieldDecorator('name')(
                                <Input placeholder=" " />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={30} >
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>清除选择
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

class DiagnoseTable extends Component {
    constructor(spec){
        super(spec);

        this.columns = [{
            title: '患者姓名',
            dataIndex: PatientM.PatientKeyName,
            key: PatientM.PatientKeyName,
        }, {
            title: '挂号ID',
            dataIndex: PatientM.PatientKeyID,
            key: PatientM.PatientKeyID,
        }, {
            title: '预约时间',
            dataIndex: PatientM.PatientKeyCareDate,
            key: PatientM.PatientKeyCareDate,
        },  {
            title: '性别',
            dataIndex: PatientM.PatientKeyGender,
            key: PatientM.PatientKeyGender,
        },  {
            title: '出生日期',
            dataIndex: PatientM.PatientKeyBirthday,
            key: PatientM.PatientKeyBirthday,
        }, {
            title: '年龄',
            // key: PatientM.PatientKeyBirthday,
            key: 'age',
        }, {
            title: '联系方式',
            dataIndex: PatientM.PatientKeyPhone,
            key: PatientM.PatientKeyPhone,
        }, {
            title: '主治医生',
            dataIndex: PatientM.PatientKeyDoctor,
            key: PatientM.PatientKeyDoctor,
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                <a href="#" onClick={this.onEdit.bind(this, record)}>编辑</a>
                    <span className="ant-divider" />
                <a href="#" onClick={this.onDelete.bind(this, record)}>删除</a>
            </span>
            ),
        }];
    }

    state = {
        data:[]
    }

    updateState(data) {
        this.setState({'data':data});
    }

    onDelete(record) {
        const id = record[PatientM.PatientKeyID];
        this.props.onDelete && this.props.onDelete({'id':id});
    }

    onEdit(record) {
        const key = PatientM.PatientKeyID;
        const id = record[key];
        this.props.onEdit && this.props.onEdit({'id':id});
    }

    search(option){
        this.props.onSearch && this.props.onSearch();
    }

    render() {
        return(
        <fragment>
            <WrappedAdvancedSearchForm onSearch={this.search.bind(this)}/>
            <div className="search-result-list">
                <Table columns={this.columns} dataSource={this.state.data} />
            </div>
        </fragment>
        );
    }
}
export default DiagnoseTable;