import { NextFunction, Request, RequestHandler, Response } from 'express';

// Async Handler Function
const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
