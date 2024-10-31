import { DeleteResult, InsertOneResult, ObjectId, UpdateResult, WithId } from 'mongodb';

import { getDb } from '../db';

export default class User {
	 id: number = -1;
	 username = '';
	 email = '';
	 password = '';
	 mode: 'new' | 'update' = 'new';

   constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.mode = 'new';
   }

   /**
    * Find User by ID if not found return null
    * 
    * @param id user id
    * @returns { Promise<WithId<Document> | null> }
    */
   static async findById(id: number): Promise<WithId<Document> | null> {
    const db = getDb();

    return db.collection('users').findOne({ _id: new ObjectId(id) }) as Promise<WithId<Document> | null> ;
   }

   /**
    * Delete User by passing ID
    * 
    * @param id user id
    * @returns { Promise<DeleteResult> }
    */
   static deleteById(id: number): Promise<DeleteResult> {
    const db = getDb();

    return db.collection('users').deleteOne({ _id: new ObjectId(id) });
   }

   /**
    * Add or Update User based on the mode and add to database
    * 
    * @returns { Promise<InsertOneResult<Document>> | Promise<UpdateResult<Document>> }
    */
   save(): Promise<InsertOneResult<Document>> | Promise<UpdateResult<Document>> {
    switch (this.mode) {
      case 'new':
        return this.#addUser();
      case 'update':
        return this.#updateUser();
    }
   }

   /**
    * Add new user
    * 
    * @returns { Promise<InsertOneResult<Document>> }
    */
   #addUser(): Promise<InsertOneResult<Document>> {
    const db = getDb();

    return db.collection('users').insertOne(this);
   }

   /**
    * Update the current User and reflect that in the database
    * 
    * @returns { Promise<UpdateResult<Document>> }
    */
   #updateUser(): Promise<UpdateResult<Document>> {
    const db = getDb();

    return db.collection('users').updateOne({ _id: new ObjectId(this.id) }, { $set: this });
   }
}