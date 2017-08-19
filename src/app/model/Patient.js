/**
 * Created by yangzhenyu on 2017/7/20.
 */


let db = require('../database/DataBase.js');

export const PatientKeyID="id";
export const PatientKeyName='name';
export const PatientKeyBirthday='birthday';
export const PatientKeyPhone='phone';
export const PatientKeyGender='gender';

export const PatientKeyContactName='contact_name';
export const PatientKeyContactRels='contact_relation';
export const PatientKeyContactPhone='contact_name_phone';

//TODO拆分
export const PatientKeyDoctor='doctor';
export const  PatientKeyCareDate = 'CareDate';

const TableName='patients';

export class Patient
{
    constructor() {
        this[PatientKeyID]=0;
        this[PatientKeyName]='uu';
        this[PatientKeyBirthday]='';
        this[PatientKeyPhone]='';
        this[PatientKeyGender]='male';
        this[PatientKeyContactName]='';
        this[PatientKeyContactRels]='';
        this[PatientKeyContactPhone]='';
    }

    insertData(data, cb) {
        if (!data[PatientKeyID]) {
            data[PatientKeyID] = db.getDataCount(TableName)+1;
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
