import express from 'express';
const app = express();

import flash from 'express-flash';
import session from 'express-session';

import { mongoConnect } from './db/index';
import bodyParser from 'body-parser';
const PORT = 3000;

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');

app.use(session({
  secret: '4f9h8G2k1LzR',
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(flash());

app.use(homeRoutes);
app.use(userRoutes);

mongoConnect(() => app.listen(PORT));