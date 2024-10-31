import { Db, MongoClient } from 'mongodb';

let _db!: Db;

export const connectionString = "mongodb+srv://salehabuhussein:3996949@cluster0.oa8cj.mongodb.net/shop";

/**
 * Connect to database 
 * Then assign MongoClient instance to global variable called _db
 * Then fire the callback which is listening to the server in this case
 * 
 * @param { void } callback 
 * @returns { void }
 */
export const mongoConnect = (callback: () => void): void => {
  MongoClient.connect(connectionString)
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

/**
 * MongoClient getter if it exist
 * otherwise throw error
 * 
 * @returns { Db }
 */
export const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};