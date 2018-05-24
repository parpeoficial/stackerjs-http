export class Request 
{
    constructor(request) 
    {
        this.request = request;
        this.params = Object.assign({}, this.getParams(), this.getQueries());
    }

    get(key, defaultValue = null) 
    {
        if (typeof this.params[key] !== "undefined") return this.params[key];

        return defaultValue;
    }

    getBody() 
    {
        return this.request.body;
    }

    getCompleteUrl() 
    {
        return (
            `${this.getProtocol()}://` +
            `${this.getHostName()}:${this.getPort()}` +
            `${this.getUrl()}`
        );
    }

    getHeaders() 
    {
        return this.request.headers;
    }

    getHostName() 
    {
        return this.request.hostname;
    }

    getIPAddress() 
    {
        return this.request.headers["x-forwarded-for"] ||
            (this.request.connection && this.request.connection.remoteAddress) ||
            this.request.socket.remoteAddress ||
            this.request.ip;
    }

    getMethod() 
    {
        return this.request.method.toUpperCase();
    }

    getParams() 
    {
        return this.request.params;
    }

    getPort() 
    {
        return this.request.socket.localPort;
    }

    getProtocol() 
    {
        return this.request.protocol;
    }

    getQueries() 
    {
        let queries = this.request.query;
        Object.keys(queries).forEach(field => 
        {
            try 
            {
                queries[field] = JSON.parse(queries[field]);
            }
            catch (err) 
            {
                queries[field] = queries[field];
            }
        });

        return queries;
    }

    getUrl() 
    {
        return this.request.path;
    }
}
