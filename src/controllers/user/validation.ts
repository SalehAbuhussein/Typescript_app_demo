import { Request, Response, NextFunction } from 'express';

import { validationResult } from "express-validator";

export const validateSignupForm = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      req.flash('error', errors[0].msg);
  
      return res.redirect('/signup');
    }

    next();
}