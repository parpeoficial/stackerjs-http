import { expect } from 'chai';
import { Http } from './../../lib';


describe('Unit/ExceptionsTest', () => 
{
    it('Should throw BadRequestException', () => 
    {
        expect(() => { throw new Http.Exception.BadRequestError("Bad request") })
            .to.throw();
    });

    it('Should throw UnauthorizedException', () => 
    {
        expect(() => { throw new Http.Exception.UnauthorizedError("Unauthorized") })
            .to.throw();
    });

    it('Should throw ForbiddenException', () => 
    {
        expect(() => { throw new Http.Exception.ForbiddenError("Forbidden") })
            .to.throw();
    });

    it('Should throw NotFoundException', () => 
    {
        expect(() => { throw new Http.Exception.NotFoundError("Not found") })
            .to.throw();
    });
});