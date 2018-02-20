import { HttpError } from './HttpError';
import { Response } from './../Response';


export class BadRequestError extends HttpError
{ 
    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_BAD_REQUEST;
    } 
}