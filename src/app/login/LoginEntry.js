/**
 * Created by yangzhenyu on 2017/7/23.
 */
import React, { Component } from 'react';
import {Layout, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { Card } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class LoginEntryImp extends Component {

    state = {
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

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
            <Layout style={{'justify-content':'center', 'align-items':'center'}}>
            <Card title="欢迎使用门诊" style={{width: 400 }}>

            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label={(<span> 用户名&nbsp;
                        <Tooltip title="你的用户名?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>)}
                    hasFeedback>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名', whitespace: true }],
                    })( <Input />)}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="密码"
                    hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">登陆</Button>
                    {/*<Button type="primary" htmlType="submit">忘记密码？</Button>*/}
                </FormItem>
            </Form>
        </Card>
            </Layout>
        );
    }
}
const LoginEntry = Form.create()(LoginEntryImp);
export default LoginEntry;