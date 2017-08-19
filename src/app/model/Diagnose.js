/**
 * Created by yangzhenyu on 2017/8/6.
 */

let db = require('../database/DataBase.js');

export const DiagnoseKeyID="id"; //全部挂号排号
export const DiagnoseKeyIDTemp='idTemp'; //今日挂号排号
export const DiagnoseKeyPatientID="patientId"; //全部挂号排号
export const DiagnoseKeyDoctor='doctor';
export const DiagnoseKeyCareDate='carre_date';
export const DiagnoseKeyState='state';

export const reservation='0';
export const diagnosing='1';
export const diagnosed='2';

const TableName='diagnose';

export class Diagnose
{
    constructor() {
        this[DiagnoseKeyID]=0;
        this[DiagnoseKeyIDTemp]=0;
        this[DiagnoseKeyPatientID]=0;
        this[DiagnoseKeyCareDate]='';
        this[DiagnoseKeyDoctor]='';
        this[DiagnoseKeyState]=reservation;
    }

    inserData(data, cb) {
        if (!data[DiagnoseKeyID]) {
            data[DiagnoseKeyID] = db.getDataCount(TableName)+1;
        }


        db.insertData(TableName, data, (err)=>{
            cb && cb(err);
        });
    }

    deleteData(data, cb) {
        db.deleteData(TableName, data, (err)=>{
            cb && cb(err);
        });
    }

    getAllDataByState(state, cb){
        db.getData(TableName, (docs)=>{
            cb && cb(docs);
        });
    }

    getAllDataByDate(date){
        return ;
    }
}
