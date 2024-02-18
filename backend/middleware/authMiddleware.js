// authMiddleWare.js
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //   console.log(
  //     'req.headers.authorization-------',
  //     req.headers.authorization.split(' ')[1]
  //   ); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZhYjM2ZWRlNzNmMTEyMTI3MzE2MSIsImlhdCI6MTcwODEyOTg1NSwiZXhwIjoxNzEwNzIxODU1fQ.3s8V8--ALBMjxaJIlSTFU1qNJ_W_IUZc9Llfl59wD5s

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   console.log('req.headers.authorization', req.headers.authorization);
      //   console.log('decoded', decoded); // { id: '65cfab36ede73f1121273161', iat: 1708129855, exp: 1710721855 }

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  // next();
});

export { protect };
