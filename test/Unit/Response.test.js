import { expect } from 'chai';
import { Response } from './../../lib';


describe('Unit/ResponseTest', () => 
{
    describe('Setting Header', () => 
    {
        it('Should set header', () => 
        {
            expect(new Response().setHeaders({ 'auth': '123' }).getHeaders())
                .to.have.property('auth');
        });
    });

    describe('Setting Content', () => 
    {
        it('Should not define content if different of string, Buffer or Array/Object', () => 
        {
            expect(new Response().setContent(1).getContent()).to.be.null;
        });

        it('Should set content as string', () => 
        {
            expect(new Response().setContent('OK').getContent())
                .to.be.equal("OK");
        });

        it('Should set content as Array', () => 
        {
            expect(new Response().setContent([ 1, 2, 3 ]).getContent())
                .to.be.an('array');
        });
    });
});