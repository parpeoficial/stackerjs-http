

export class HttpError extends Error
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