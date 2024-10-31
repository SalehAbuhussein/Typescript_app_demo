import { Request, Response, NextFunction } from 'express';

import User from '../../models/user';

type PostUserBody = { username: string, email: string, password: string };

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  res.render('login', {
    path: 'login'
  });
};

export const getSignup = (req: Request, res: Response, next: NextFunction) => {
  res.render('signup', {
    path: 'signup',
    errorMsg: req.flash('error')
  });
};

export const postUser =  async (req: Request, res: Response, next: NextFunction) => {
  const body: PostUserBody = req.body;

  const newUser = new User(body.username, body.email, body.password);

  try {
    const userResult = await newUser.save();

    return res.redirect('/');
  } catch (err) {
    console.error(err);
    return res.redirect('/');
  }
};