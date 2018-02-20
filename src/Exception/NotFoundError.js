import { HttpError } from './HttpError';


export class NotFoundError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_NOT_FOUND;
    }
}