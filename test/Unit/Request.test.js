import { expect } from 'chai';
import { Http } from './../../lib';


describe('Unit/RequestTest', () => 
{
    let ANY_ID = 1203120983, REQUEST;

    describe('Creating Request', () => 
    {
        it('Should create a Request', () => 
        {
            REQUEST = new Http.Request({
                'method': 'GET',
                'query': {
                    'some': 'thing'
                },
                'params': {
                    'id': ANY_ID
                },
                'socket': {
                    'localPort': 5000
                },
                'headers': {
                    'Authorization': 'Bearer s0m3t0k3nth4t3n4bl3funct1on5'
                },
                'body': {
                    'user': {
                        'name': "Vinicius Guedes",
                        'birthday': new Date('1992-12-30 08:25:01').toString()
                    }
                },
                'ip': '127.0.0.1',
                'hostname': 'localhost',
                'protocol': 'http',
                'path': '/users'
            });
        });
    });

    describe('Request Get Params and Queries', () => 
    {
        it('Should test Request@get', () => 
        {
            expect(REQUEST.get('id')).to.be.equal(ANY_ID);
            expect(REQUEST.get('some')).to.be.equal('thing');
            expect(REQUEST.get('none')).to.be.null;
        });
    });

    describe('Request Body', () => 
    {
        it('Should test Request@getBody', () => 
        {
            let body = REQUEST.getBody();
            expect(body).to.have.property('user');
            expect(body.user).to.have.property('name');
        });
    });

    describe('Request URL', () => 
    {
        it('Should test Request@getCompleteUrl, getProtocol, @getHostName, @getPort, @getUrl at once', () => 
        {
            expect(REQUEST.getCompleteUrl()).to.be.equal('http://localhost:5000/users');
        });
    });

    describe('Request IP', () => 
    {
        it('Should test Request@getIPAddress', () => 
        {
            expect(REQUEST.getIPAddress()).to.be.equal('127.0.0.1');
        });
    });

    describe('Request Method', () => 
    {
        it('Should test Request@getMethod', () => 
        {
            expect(REQUEST.getMethod()).to.be.equal('GET');
        });
    });

    describe('Request Headers', () => 
    {
        it('Should test Request@getHeaders', () => 
        {
            let headers = REQUEST.getHeaders();
            expect(headers).to.have.property('Authorization');
        });
    });

});