/**
 * Created by yangzhenyu on 2017/7/20.
 */
/**
 * Created by yangzhenyu on 2017/7/20.
 */
import React, { Component } from 'react';
import {Alert } from 'antd';

class Unspport extends Component {
    render() {
        return(
            <Alert
                message="该功能暂未开启"
                description="等待下个版本支持"
                type=""
            />
        );
    }
}

export default Unspport;