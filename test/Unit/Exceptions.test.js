import { expect } from 'chai';
import { Http } from './../../lib';


describe('Unit/ExceptionsTest', () => 
{
    it('Should throw BadRequestException', done => 
    {
        Promise.reject(new Http.Exception.BadRequestError("bad"))
            .catch(err => {
                expect(() => { throw err }).to.throw('bad');
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_BAD_REQUEST);
            })
            .then(() => done());
    });

    it('Should throw UnauthorizedException', done => 
    {
        Promise.reject(new Http.Exception.UnauthorizedError("Unauthorized"))
            .catch(err => {
                expect(() => { throw err }).to.throw('Unauthorized');
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_UNAUTHORIZED);
            })
            .then(() => done());
    });

    it('Should throw ForbiddenException', done => 
    {
        Promise.reject(new Http.Exception.ForbiddenError("Forbidden"))
            .catch(err => {
                expect(() => { throw err }).to.throw('Forbidden');
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_FORBIDDEN);
            })
            .then(() => done());
    });

    it('Should throw NotFoundException', () => 
    {
        Promise.reject(new Http.Exception.NotFoundError("Not found"))
            .catch(err => {
                expect(() => { throw err }).to.throw('Not found');
                expect(err.getCode()).to.be.equal(Http.Response.HTTP_NOT_FOUND);
            })
            .then(() => done());
    });
});