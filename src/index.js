import { Exception } from "./Exception";
import { MakeRequest } from "./MakeRequest";
import { Response } from "./Response";
import { Request } from "./Request";

global.response = (content, statusCode = Response.HTTP_OK) =>
    new Response().setContent(content).setStatusCode(statusCode);

exports.Http = {
    MakeRequest,
    Request,
    Response,
    Exception
};
