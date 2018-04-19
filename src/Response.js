export class Response 
{
    constructor() 
    {
        this.headers = {};
        this.statusCode = 200;
        this.content = null;
    }

    getHeaders() 
    {
        return this.headers;
    }

    setHeaders(headers) 
    {
        Object.keys(headers).forEach(key => this.setHeader(key, headers[key]));

        return this;
    }

    setHeader(key, value) 
    {
        this.headers[key.toLowerCase()] = value;

        return this;
    }

    getStatusCode() 
    {
        return this.statusCode;
    }

    setStatusCode(statusCode) 
    {
        this.statusCode = statusCode;
        return this;
    }

    getContent() 
    {
        if (!this.content) return null;

        if (
            this.headers["content-type"] &&
            this.headers["content-type"].indexOf("application/json") >= 0
        )
            return JSON.parse(this.content.toString());

        return this.content.toString();
    }

    setContent(content) 
    {
        if (typeof content === "string")
            return this.setContent(new Buffer(content));

        if (Array.isArray(content) || content.constructor === Object) 
        {
            this.headers["content-type"] = "application/json";
            return this.setContent(JSON.stringify(content));
        }

        if (content instanceof Buffer) this.content = content;

        return this;
    }
}
Response.HTTP_OK = 200;
Response.HTTP_CREATED = 201;
Response.HTTP_ACCEPTED = 202;
Response.HTTP_BAD_REQUEST = 400;
Response.HTTP_UNAUTHORIZED = 401;
Response.HTTP_FORBIDDEN = 403;
Response.HTTP_NOT_FOUND = 404;
Response.HTTP_INTERNAL_SERVER_ERROR = 500;
