import { MakeRequest } from './MakeRequest';
import { Response } from './Response';
import { Request } from './Request';


exports.MakeRequest = MakeRequest;

exports.Request = Request;

exports.Response = Response;


exports.Exceptions = (() =>
{

    class HttpError extends Error
    {

        constructor(message)
        {
            super(message);
            this.code = 500;
            this.message = message;
        }

        getCode()
        {
            return this.code;
        }

    }

    class BadRequestError extends HttpError
    { 
        constructor(message)
        {
            super(message);
            this.code = Response.HTTP_BAD_REQUEST;
        } 
    }

    class UnauthorizedError extends HttpError
    { 
        constructor(message)
        {
            super(message);
            this.code = Response.HTTP_UNAUTHORIZED; 
        }
    }

    class ForbiddenError extends HttpError
    { 
        constructor(message)
        {
            super(message);
            this.code = Response.HTTP_FORBIDDEN;
        }
    }

    class NotFoundError extends HttpError
    { 
        constructor(message)
        {
            super(message);
            this.code = Response.HTTP_NOT_FOUND;
        }
    }


    return {
        HttpError,
        BadRequestError,
        UnauthorizedError,
        ForbiddenError,
        NotFoundError
    }
})();