import { HttpError } from './HttpError';
import { BadRequestError } from './BadRequestError';
import { UnauthorizedError  } from './UnauthorizedError';
import { ForbiddenError } from './ForbiddenError';
import { NotFoundError } from './NotFoundError';


exports.Exceptions = {
    HttpError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError
}