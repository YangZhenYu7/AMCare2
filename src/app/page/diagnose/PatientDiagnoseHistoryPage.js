/**
 * Created by yangzhenyu on 2017/7/31.
 */

import React, { Component } from 'react';
import {message, Button} from 'antd';
import * as PatientM from '../../model/Patient';
import DiagnoseQueryTable from './view/DiagnoseQueryTable';
import { VictoryScatter } from 'victory';
import './css/diagnose_history.css';

class PatientDiagnoseHistory extends Component {
    constructor(spec) {
        super(spec);
        this.opLayer = new PatientM.Patient();
    }

    onDelete(record) {
        this.opLayer.deleteData(record, (err)=>{
            if (!err) {
                message.success('删除成功');
                this.search();
            } else {
                message.success('删除失败，请检查数据库');
            }
        });
    }

    onEdit(record) {
        this.opLayer.deleteData(record, (err) => {
            if (!err) {
                message.success('删除成功');
            } else {
                message.success('删除失败，请检查数据库');
            }
        });
    }

    search(option){
        this.opLayer.getAllDataByState(1, (docs)=>{
            let stateData=[];
            for (let index in docs) {
                let item = docs[index];
                item['key'] = index;
                stateData.push(item);
            }
            this.refs.table.updateState(stateData);
        });
    }

    onClick(val) {

    }

    render() {
        return(
            <div>
                <div className="div_chart_parent">
                    <VictoryScatter height={180} className="chart"/>
                    <div className="div_button_parent">
                        <Button  type="dashed" size="large"
                                 onClick={this.onClick.bind(this,1)}>本周</Button>
                        <Button  type="dashed" size="large"
                                onClick={this.onClick.bind(this,1)}>当月</Button>
                        <Button  type="dashed" size="large"
                                 onClick={this.onClick.bind(this,1)}>三个月</Button>
                    </div>
                </div>

                <DiagnoseQueryTable ref='table' onSearch={this.search.bind(this)}
                                    onDelete={this.onDelete.bind(this)}
                                    onEdit={this.onEdit.bind(this)} />
            </div>
        );
    }
}

export default PatientDiagnoseHistory;