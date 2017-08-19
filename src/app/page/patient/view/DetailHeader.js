/**
 * Created by yangzhenyu on 2017/8/4.
 */

import React, { Component} from 'react';
import '../css/detail_header.css';

class DetailHeader extends Component {
    constructor(spec) {
        super(spec);
    }

    render() {
        return(
            <div className="div_parent">
                <img className="image"
                       src='http://www.tgyixue.cn/Content/resources/images/Man140x140.png'/>

                <div className="col_parent">
                    {this.get1thCol()}
                    {this.get2edCol()}
                    {this.get3rdCol()}
                </div>
            </div>
        );
    }

    get1thCol() {
        return <div className="col">
            <label className="label">姓名：</label>
            <label className="label">性别：</label>
            <label className="label">手机号：</label>
        </div>
    }

    get2edCol() {
        return <div className="col">
            <label className="label">年龄：</label>
            <label className="label">身高：</label>
            <label className="label">体重：</label>
        </div>
    }

    get3rdCol() {
        return <div className="col">
            <label className="label">紧急联系人：</label>
            <label className="label">关系：</label>
            <label className="label">联系方式：</label>
        </div>
    }
}

export default DetailHeader;