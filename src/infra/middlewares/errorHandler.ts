import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  require('express-async-errors');

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: true,
      statusCode: error.statusCode,
      message: error.message,
    });
  }
  console.log(error);

  return res
    .status(500)
    .json({ error: true, statusCode: 500, message: 'Internal Server Error' });
};

export default handleError;
