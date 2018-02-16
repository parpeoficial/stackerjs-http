import { StackerJS } from 'stackerjs-types';


declare module "stackerjs-http"
{

    export namespace Http
    {

        export class Request extends StackerJS.Http.Request {}

        export class Response extends StackerJS.Http.Response {}

        export class MakeRequest extends StackerJS.Http.MakeRequest {}

    }

}