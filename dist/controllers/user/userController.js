"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getSignup = exports.getLogin = void 0;
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../../models/user"));
const getLogin = (req, res, next) => {
    res.render('login', {
        path: 'login'
    });
};
exports.getLogin = getLogin;
const getSignup = (req, res, next) => {
    const errorMsg = req.flash('error');
    res.render('signup', {
        path: 'signup',
        errorMsg: errorMsg
    });
};
exports.getSignup = getSignup;
const postUser = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req).array();
    const newUser = new user_1.default('saleh', 'saleh@gmail.com', '123456');
    newUser.save();
    // console.log(User.deleteById('671fd79e2d909529b80bd706'));
    if (result.length > 0) {
        req.flash('error', result[0].msg);
        res.redirect('/signup');
    }
    else {
        // console.log('no errors');
    }
    res.write('<h1>Post User</h1>');
    res.end();
};
exports.postUser = postUser;
