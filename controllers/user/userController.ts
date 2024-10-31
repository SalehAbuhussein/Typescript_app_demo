import { Request, Response, NextFunction } from 'express';

import { validationResult } from 'express-validator';

import User from '../../models/user';

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  res.render('login', {
    path: 'login'
  });
};

export const getSignup = (req: Request, res: Response, next: NextFunction) => {
  const errorMsg = req.flash('error');

  res.render('signup', {
    path: 'signup',
    errorMsg: errorMsg
  });
};

export const postUser = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req).array();
  
  const newUser = new User('saleh', 'saleh@gmail.com', '123456');

  newUser.save();

  // console.log(User.deleteById('671fd79e2d909529b80bd706'));


  if (result.length > 0) {
    req.flash('error', result[0].msg);
    res.redirect('/signup');
  } else {
    // console.log('no errors');
  }

  res.write('<h1>Post User</h1>');
  res.end();
};