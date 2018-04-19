import { HttpError } from "./HttpError";
import { Response } from "./../Response";

export class ForbiddenError extends HttpError 
{
    constructor(message) 
    {
        super(message);
        this.code = Response.HTTP_FORBIDDEN;
    }
}
