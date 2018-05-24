import { StackerJS } from 'stackerjs-types';


/**
 * Returns an Http.Response object
 * 
 * @param content Responses content
 * @param statusCode Responses Status Code. If not defined default value is 200.
 */
declare function response(content: string | any, statusCode?: number): StackerJS.Http.Response;


declare module "stackerjs-http"
{

    export namespace Http
    {

        export class Request extends StackerJS.Http.Request { }

        export class Response extends StackerJS.Http.Response { }

        export class MakeRequest extends StackerJS.Http.MakeRequest { }

        export namespace Exception
        {

            export abstract class HttpError extends StackerJS.Http.Exception.HttpError { }

            export class BadRequestError extends HttpError { }

            export class ForbiddenError extends HttpError { }

            export class NotFoundError extends HttpError { }

            export class UnauthorizedError extends HttpError { }

        }

    }

}