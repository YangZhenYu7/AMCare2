/**
 * Created by yangzhenyu on 2017/7/31.
 */

import React, { Component } from 'react';
import {Button} from 'antd';
import '../css/today_header.css';

class DiagnoseTodayHeader extends Component {
    constructor(spec) {
        super(spec);

    }

    onClick(tag) {

    }

    render() {
        return(
            <div className="div_header">
                <Button className='button_header' type="dashed" size="large"
                        onClick={this.onClick.bind(this,0)}>今日就诊人数</Button>
                <Button className='button_header' type="dashed" size="large"
                        onClick={this.onClick.bind(this,1)}>今日诊断中人数</Button>
                <Button className='button_header'type="dashed" size="large"
                        onClick={this.onClick.bind(this,2)}>今日待就诊人数</Button>
            </div>
        );
    }
}

export default DiagnoseTodayHeader;