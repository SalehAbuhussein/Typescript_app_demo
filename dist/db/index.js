"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.mongoConnect = void 0;
const mongodb_1 = require("mongodb");
let _db;
const mongoConnect = (callback) => {
    mongodb_1.MongoClient.connect("mongodb+srv://salehabuhussein:3996949@cluster0.oa8cj.mongodb.net/shop")
        .then(client => {
        client.db();
        _db = client.db();
        callback();
    })
        .catch(err => {
        console.log(err);
        throw (err);
    });
};
exports.mongoConnect = mongoConnect;
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
};
exports.getDb = getDb;
