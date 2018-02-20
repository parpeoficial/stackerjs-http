import { HttpError } from './HttpError';


export class UnauthorizedError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_UNAUTHORIZED; 
    }
}