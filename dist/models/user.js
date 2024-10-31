"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_instances, _User_addUser, _User_updateUser;
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../db");
class User {
    constructor(username, email, password) {
        _User_instances.add(this);
        this.id = -1;
        this.username = '';
        this.email = '';
        this.password = '';
        this.mode = 'new';
        this.username = username;
        this.email = email;
        this.password = password;
        this.mode = 'new';
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, db_1.getDb)();
            return db.collection('users').findOne({ _id: new mongodb_1.ObjectId(id) });
            // if (result) {
            //   const user = new User(id, result.username, result.email, result.password);
            //   user.mode = 'update';
            //   return user;
            // } else {
            //   return null;
            // }
        });
    }
    static deleteById(id) {
        const db = (0, db_1.getDb)();
        return db.collection('users').deleteOne({ _id: new mongodb_1.ObjectId(id) });
    }
    save() {
        switch (this.mode) {
            case 'new':
                return __classPrivateFieldGet(this, _User_instances, "m", _User_addUser).call(this);
            case 'update':
                return __classPrivateFieldGet(this, _User_instances, "m", _User_updateUser).call(this);
        }
    }
}
_User_instances = new WeakSet(), _User_addUser = function _User_addUser() {
    const db = (0, db_1.getDb)();
    return db.collection('users').insertOne(this);
}, _User_updateUser = function _User_updateUser() {
    const db = (0, db_1.getDb)();
    return db.collection('users').updateOne({ _id: new mongodb_1.ObjectId(this.id) }, { $set: this });
};
exports.default = User;
