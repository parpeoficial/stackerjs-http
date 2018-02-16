import { expect } from 'chai';
import { Http } from './../../lib';


describe('Unit/ExceptionsTest', () => 
{
    it('Should throw BadRequestException', () => 
    {
        expect(() => { throw new Http.Exceptions.BadRequestError("Bad request") })
            .to.throw();
    });

    it('Should throw UnauthorizedException', () => 
    {
        expect(() => { throw new Http.Exceptions.UnauthorizedError("Unauthorized") })
            .to.throw();
    });

    it('Should throw ForbiddenException', () => 
    {
        expect(() => { throw new Http.Exceptions.ForbiddenError("Forbidden") })
            .to.throw();
    });

    it('Should throw NotFoundException', () => 
    {
        expect(() => { throw new Http.Exceptions.NotFoundError("Not found") })
            .to.throw();
    });
});