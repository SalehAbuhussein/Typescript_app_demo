import { ObjectId } from 'mongodb';
import { getDb } from '../db';

export default class User {
  id: number = -1;
  username = '';
  email = '';
  password = '';
  mode: 'new' | 'update' = 'new'

   constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.mode = 'new';
   }

   static async findById(id: number) {
    const db = getDb();

    return db.collection('users').findOne({ _id: new ObjectId(id) });

    // if (result) {
    //   const user = new User(id, result.username, result.email, result.password);
    //   user.mode = 'update';

    //   return user;
    // } else {
    //   return null;
    // }
   }

   static deleteById(id: number) {
    const db = getDb();

    return db.collection('users').deleteOne({ _id: new ObjectId(id) });
   }

   save() {
    switch (this.mode) {
      case 'new':
        return this.#addUser();
      case 'update':
        return this.#updateUser();
    }
   }

   #addUser() {
    const db = getDb();

    return db.collection('users').insertOne(this);
   }

   #updateUser() {
    const db = getDb();

    return db.collection('users').updateOne({ _id: new ObjectId(this.id) }, { $set: this });
   }
}