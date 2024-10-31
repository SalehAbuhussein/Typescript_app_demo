import { Db, MongoClient } from 'mongodb';

let _db!: Db;

export const mongoConnect = (callback: () => void) => {
  MongoClient.connect("mongodb+srv://salehabuhussein:3996949@cluster0.oa8cj.mongodb.net/shop")
  .then(client => {
    client.db()
      _db = client.db();
      callback();
  })
  .catch(err => {
    console.log(err);
    throw(err);
  });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};