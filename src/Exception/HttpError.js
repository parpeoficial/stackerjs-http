import { Response } from './../Response';


export class HttpError extends Error
{

    constructor(message)
    {
        super(message);
        this.code = Response.HTTP_INTERNAL_SERVER_ERROR;
        this.message = message;

        this.getCode = () => this.code;
    }

}