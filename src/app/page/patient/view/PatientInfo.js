/**
 * Created by yangzhenyu on 2017/8/4.
 */

import React, { Component } from 'react';
import '../css/detail_content.css';
import { Form,DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class PatientInfoForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.form.resetFields();
                this.props.handleSubmit(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label='姓名'>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入姓名'}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='出生日期'>
                    {getFieldDecorator('birthday', {
                        rules: [{ required: true, message: '请输入出生日期' }],
                    })( <DatePicker format="YYYY-MM-DD"/>)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='联系方式'>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入联系方式' }],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    label="性别"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: '请选择性别' }],
                    })(
                        <Select
                            placeholder="男"
                        >
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='省份证号'>
                    {getFieldDecorator('idNum', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='身高'>
                    {getFieldDecorator('height', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='体重'>
                    {getFieldDecorator('weight', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='紧急联系人'>
                    {getFieldDecorator('contact_sec', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='紧急联系人手机'>
                    {getFieldDecorator('contact_sec_tel', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label='紧急联系人关系'>
                    {getFieldDecorator('contact_sec_relation', {
                        rules: [{ required: false,}],
                    })( <Input />)}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">保存信息</Button>
                </FormItem>
            </Form>
        );
    }
}
const PatientInfo = Form.create()(PatientInfoForm);
export default PatientInfo;