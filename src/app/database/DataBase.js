/**
 * Created by yangzhenyu on 2017/7/20.
 */

  // let MongoClient = require('mongodb').MongoClient;

class DataBase  {
    // constructor() {
    //     let url = 'mongodb://localhost:12221';
    //     MongoClient.connect(url, (err, db)=> {
    //         if (!err) {
    //             this.db=db;
    //             console.log("Connected correctly to server.");
    //         } else {
    //             this.db = null;
    //         }
    //     });
    // }
    //
    // insertData(col, data, cb) {
    //     let collection = this.db.collection(col);
    //     if (Array.isArray(data)) {
    //         collection.insertMany(data, (err, r)=>{
    //             if (!err) {
    //                 console.log("insert succuss! = "+ r);
    //             }
    //             cb&&cb(!err);
    //         });
    //     } else {
    //         collection.insertOne(data, (err, r)=>{
    //             if (!err) {
    //                 console.log("insert succuss! = "+ r);
    //             }
    //             cb&&cb(!err);
    //         });
    //     }
    // }
    //
    //
    // updateData(col, data, cb) {
    //     // let collection = db.collection(col);
    //     // collection.save(data, cb);
    // }
    //
    //
    // deleteData(col, data, cb) {
    //     let collection = this.db.collection(col);
    //     if (Array.isArray(data)) {
    //         collection.deleteMany(data, (err, r)=>{
    //             if (!err) {
    //                 console.log("delete succuss! = "+ r);
    //             }
    //             cb&&cb(!err);
    //         });
    //     } else {
    //         collection.deleteOne(data, (err, r)=>{
    //             if (!err) {
    //                 console.log("delete succuss! = "+ r);
    //             }
    //             cb&&cb(!err);
    //         });
    //     }
    // }
    //
    // getData(col, cb) {
    //     let collection = this.db.collection(col);
    //     collection.find({}).toArray((err, doc)=>{
    //         cb && cb(doc);
    //     });
    // }
    //
    // getData(col, dict, cb) {
    //     let collection = this.db.collection(col);
    //     collection.find(dict).toArray((err, doc)=>{
    //         cb && cb(doc);
    //     });
    // }
    //
    //
    // getDataCount(col) {
    //     let collection = this.db.collection(col);
    //     return collection.find({}).count();
    // }

}

module.exports = new DataBase();