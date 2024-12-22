/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// Zod Error Handler
const handleDuplicateError = (er: any): TGenericErrorResponse => {
  const match = er.message.match(/"([^"]*)"/);
  const extactMessage = match && match[1];
  const error: TErrorSources = [
    {
      path: '',
      message: `${extactMessage} Already Exist!`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate Error',
    error,
  };
};

export default handleDuplicateError;
