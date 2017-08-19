/**
 * Created by yangzhenyu on 2017/7/23.
 */

import React, { Component } from 'react';
import * as PatientM from '../../model/Patient';
import PatientInfo from './view/PatientInfo';
import './patient_detail.css';

class PatientInfoPage extends Component {
    constructor(spec) {
        super(spec);
    }


    render() {
        return(
            <div className="detail_parent">
            <PatientInfo/>

            </div>
        );
    }
}

export default PatientInfoPage;