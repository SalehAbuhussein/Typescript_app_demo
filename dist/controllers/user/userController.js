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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getSignup = exports.getLogin = void 0;
const user_1 = __importDefault(require("../../models/user"));
const getLogin = (req, res, next) => {
    res.render('login', {
        path: 'login'
    });
};
exports.getLogin = getLogin;
const getSignup = (req, res, next) => {
    res.render('signup', {
        path: 'signup',
        errorMsg: req.flash('error')
    });
};
exports.getSignup = getSignup;
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const newUser = new user_1.default(body.username, body.email, body.password);
    try {
        const userResult = yield newUser.save();
        console.log(userResult);
    }
    catch (err) {
        console.error(err);
    }
    res.write('<h1>Post User</h1>');
    res.end();
});
exports.postUser = postUser;
