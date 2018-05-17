import axios from "axios";
import { parse as urlparser } from "url";
import { Response } from "./Response";

export class MakeRequest 
{
    constructor() 
    {
        this.headers = {
            "Content-type": "application/json"
        };
        this.host = "localhost";
        this.port = 80;
        this.timeout = 3000;
    }

    setHeader(key, value) 
    {
        this.headers[key] = value;
        return this;
    }

    setHost(host) 
    {
        this.host = host;
        return this;
    }

    setPort(port) 
    {
        this.port = port;
        return this;
    }

    setTimeout(timeout) 
    {
        this.timeout = timeout;
        return this;
    }

    get(url, params = {}) 
    {
        return this.treatRequest({
            method: "GET",
            url: this.treatUrl(url, params),
            timeout: this.timeout,
            headers: this.headers
        });
    }

    post(url, params = {}, body = {}) 
    {
        return this.treatRequest({
            method: "POST",
            url: this.treatUrl(url, params),
            timeout: this.timeout,
            headers: this.headers,
            body: JSON.stringify(body)
        });
    }

    put(url, params = {}, body = {}) 
    {
        return this.treatRequest({
            method: "PUT",
            url: this.treatUrl(url, params),
            timeout: this.timeout,
            headers: this.headers,
            body: JSON.stringify(body)
        });
    }

    patch(url, params = {}, body = {}) 
    {
        return this.treatRequest({
            method: "PATCH",
            url: this.treatUrl(url, params),
            timeout: this.timeout,
            headers: this.headers,
            body: JSON.stringify(body)
        });
    }

    delete(url, params = {}) 
    {
        return this.treatRequest({
            method: "DELETE",
            url: this.treatUrl(url, params),
            timeout: this.timeout,
            headers: this.headers
        });
    }

    treatRequest(configurations) 
    {
        return axios(configurations)
            .then(this.formatResponse)
            .catch(err => 
            {
                if (!err.response)
                    throw err;

                return this.formatResponse(err.response);
            });
    }

    formatResponse(axiosResponse) 
    {
        let httpResponse = new Response();
        httpResponse.setHeaders(axiosResponse.headers);
        httpResponse.setStatusCode(axiosResponse.status);
        httpResponse.setContent(axiosResponse.data);

        return httpResponse;
    }

    treatUrl(url, params) 
    {
        let urlInfo = urlparser(url);
        params = Object.keys(params).map(key => 
        {
            if (Array.isArray(params[key]) || typeof params[key] === "object")
                return `${key}=${JSON.stringify(params[key])}`;

            return `${key}=${params[key]}`;
        });

        if (urlInfo.query)
            urlInfo.query
                .toString()
                .split("&")
                .map(query => params.push(query));

        if (urlInfo.host) 
        {
            url = `${urlInfo.protocol}//${urlInfo.host}${urlInfo.pathname}`;
            url += params.length > 0 ? `?${params.join("&")}` : "";

            return url;
        }

        let uri = `${this.host}`;
        if (this.port !== 80) uri += `:${this.port}`;

        uri += url;
        if (uri.substr(0, 7) !== "http://" && uri.substr(0, 7) !== "https:/")
            uri = `http://${uri}`;

        if (params.length > 0) uri += `?${params.join("&")}`;

        return uri;
    }
}
