import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded);

      // console.log('Token found');

      req.user = await  User.findById(decoded.id).select('-password')

      next();

    } catch (error) {

      console.error(error)
      res.status(401)
      throw new Error('Token Not Authorized - Token Failed')
    }

    
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no Token ');
  }
});

const admin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('No Authorized Not Admin')
  }
}

export  {protect, admin};
