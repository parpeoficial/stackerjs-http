import { expect } from "chai";
import { Http } from "./../../src";

describe("Unit/ExceptionsTest", () => 
{
    it("Should throw BadRequestException", done => 
    {
        Promise.reject(new Http.Exception.BadRequestError({ status: false }))
            .catch(err => 
            {
                expect(err.getMessage().status).to.be.false;
                expect(() => 
                {
                    throw err;
                }).to.throw();
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_BAD_REQUEST);
            })
            .then(() => done());
    });

    it("Should throw UnauthorizedException", done => 
    {
        Promise.reject(new Http.Exception.UnauthorizedError("Unauthorized"))
            .catch(err => 
            {
                expect(err.getMessage()).to.be.equal("Unauthorized");
                expect(() => 
                {
                    throw err;
                }).to.throw("Unauthorized");
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_UNAUTHORIZED);
            })
            .then(() => done());
    });

    it("Should throw ForbiddenException", done => 
    {
        Promise.reject(new Http.Exception.ForbiddenError("Forbidden"))
            .catch(err => 
            {
                expect(() => 
                {
                    throw err;
                }).to.throw("Forbidden");
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_FORBIDDEN);
            })
            .then(() => done());
    });

    it("Should throw NotFoundException", done => 
    {
        Promise.reject(new Http.Exception.NotFoundError("Not found"))
            .catch(err => 
            {
                expect(() => 
                {
                    throw err;
                }).to.throw("Not found");
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_NOT_FOUND);
            })
            .then(() => done());
    });
});
