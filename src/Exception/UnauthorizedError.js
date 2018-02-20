import { HttpError } from './HttpError';
import { Response } from './../Response';


export class UnauthorizedError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_UNAUTHORIZED; 
    }
}