import { Response } from './../Response';


export class HttpError extends Error
{

    constructor(message)
    {
        super(typeof message === 'object' ? JSON.stringify(message) : message);
        Error.captureStackTrace(this, HttpError);

        this.code = Response.HTTP_INTERNAL_SERVER_ERROR;
        this.getCode = () => this.code;
        this.getMessage = () =>
        {
            try {
                return JSON.parse(this.message);
            } catch (err) { return this.message }
        }
    }

}