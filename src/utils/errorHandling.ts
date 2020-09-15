import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export default function errorHandling(error: ValidationError): Error {
  const errors: Error = {};

  error.inner.forEach(err => {
    errors[err.path] = err.message;
  });

  return errors;
}
