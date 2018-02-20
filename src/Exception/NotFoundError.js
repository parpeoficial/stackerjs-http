import { HttpError } from './HttpError';
import { Response } from './../Response';


export class NotFoundError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_NOT_FOUND;
    }
}