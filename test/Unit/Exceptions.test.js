import { expect } from 'chai';
import { Exceptions } from './../../lib';


describe('Unit/ExceptionsTest', () => 
{
    it('Should throw BadRequestException', () => 
    {
        expect(() => { throw new Exceptions.BadRequestError("Bad request") })
            .to.throw('Bad request');
    });

    it('Should throw UnauthorizedException', () => 
    {
        expect(() => { throw new Exceptions.UnauthorizedError("Unauthorized") })
            .to.throw('Unauthorized');
    });

    it('Should throw ForbiddenException', () => 
    {
        expect(() => { throw new Exceptions.ForbiddenError("Forbidden") })
            .to.throw('Forbidden');
    });

    it('Should throw NotFoundException', () => 
    {
        expect(() => { throw new Exceptions.NotFoundError("Not found") })
            .to.throw('Not found');
    });
});