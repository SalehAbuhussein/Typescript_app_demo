"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const userController = __importStar(require("../controllers/user/userController"));
const validation_1 = require("../controllers/user/validation");
const router = (0, express_1.Router)();
router.get('/signup', validation_1.validateSignupForm, userController.getSignup);
router.get('/login', userController.getLogin);
router.post('/user/create', (0, express_validator_1.body)('username')
    .notEmpty()
    .withMessage('Username can not be empty!')
    .escape(), (0, express_validator_1.body)('email')
    .notEmpty()
    .withMessage('Email can not be empty!')
    .isEmail()
    .withMessage('Email must be valid email!')
    .escape(), (0, express_validator_1.body)('password')
    .notEmpty()
    .withMessage('Password must not be empty!')
    .escape(), userController.postUser);
exports.default = router;
