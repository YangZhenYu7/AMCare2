/**
 * Created by yangzhenyu on 2017/7/23.
 */

import React, { Component } from 'react';
import * as PatientM from '../../model/Patient';
import DetailHeader from './view/DetailHeader';
import DetailContent from './view/DetailContent';
import './patient_detail.css';

class PatientDiagnoseDetailPage extends Component {
    constructor(spec) {
        super(spec);
    }


    render() {
        return(
            <div className="detail_parent">
                <DetailHeader/>
                <DetailContent/>
            </div>
        );
    }
}

export default PatientDiagnoseDetailPage;