import express from 'express';
const app = express();

import flash from 'express-flash';
import session from 'express-session';

import { mongoConnect } from './db/index';
import bodyParser from 'body-parser';
const PORT = 3000;

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';

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