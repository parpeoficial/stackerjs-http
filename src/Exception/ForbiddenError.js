import { HttpError } from './HttpError';


export class ForbiddenError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_FORBIDDEN;
    }
}