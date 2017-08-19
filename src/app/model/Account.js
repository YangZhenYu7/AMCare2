/**
 * Created by yangzhenyu on 2017/8/18.
 */

let db = require('../database/DataBase.js');
const TableName = 'account';

export default class Account {
    static login(userName, password, cb) {
        db.getData(TableName, {'userName':userName}, (res)=>{
            res = res && res[0] || {};
            if (res['password'] === password) {
                cb && cb(true);
            } else {
                cb && cb(false);
            }
        });
    }

    static register(dict, cb) {
        if (!dict) {
            cb && cb(false);
            return;
        }

        db.insertData(TableName, dict , (res)=>{
           cb && cb(res);
        });
    }
}