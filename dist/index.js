"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_flash_1 = __importDefault(require("express-flash"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = require("./db/index");
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use((0, express_session_1.default)({
    secret: '4f9h8G2k1LzR',
    resave: false,
    saveUninitialized: false,
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.use((0, express_flash_1.default)());
app.use(homeRoutes_1.default);
app.use(userRoutes_1.default);
(0, index_1.mongoConnect)(() => app.listen(PORT));
