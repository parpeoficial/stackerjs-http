import { expect } from "chai";
import { Http } from "./../../index";


describe("Functional/MakeRequestTest", () => 
{
    const API = "https://jsonplaceholder.typicode.com",
        POST_ID = 1;

    describe("HTTP METHOD: GET", () => 
    {
        it("Should GET content", done => 
        {
            new Http.MakeRequest()
                .get(`${API}/posts?_limit=10`)
                .then(httpResponse => 
                {
                    let content = httpResponse.getContent();
                    expect(content).to.be.instanceOf(Array);
                    expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_OK);
                })
                .then(() => done());
        });

        it("Should GET after set some parameters to request", done => 
        {
            new Http.MakeRequest()
                .setTimeout(3000)
                .setHost(API)
                .setHeader("Auth", "Bearer 123")
                .get("/comments", { "postId": POST_ID })
                .then(httpResponse => 
                {
                    let content = httpResponse.getContent();
                    expect(content).to.be.instanceOf(Array);
                    expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_OK);
                })
                .then(() => done());
        });

        it("Should GET a NOT FOUND error", done => 
        {
            new Http.MakeRequest()
                .setTimeout(5000)
                .setHost(API)
                .get("/posts/-10")
                .then(httpResponse => expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_NOT_FOUND))
                .then(() => done());
        });
    });

    describe("HTTP METHOD: POST", () => 
    {
        it("Should POST", done => 
        {
            new Http.MakeRequest()
                .setTimeout(5000)
                .setHost(API)
                .post("/posts", {}, {
                    "userId": 1,
                    "title": "Welcome baby",
                    "body": "Hey bae, welcome to stackerjs-http, here you gonna find anything"
                })
                .then(httpResponse => 
                {
                    let content = httpResponse.getContent();
                    expect(content).to.have.property("id");
                    expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_CREATED);
                })
                .then(() => done());
        });
    });

    describe("HTTP METHOD: PUT", () => 
    {
        it("Should PUT", done => 
        {
            new Http.MakeRequest()
                .setHost(API)
                .put(`/posts/${POST_ID}`, {}, {
                    "title": "New  information about stackerJS"
                })
                .then(httpResponse => 
                {
                    expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_OK);
                })
                .then(() => done());
        });
    });

    describe("HTTP METHOD: PATCH", () => 
    {
        it("Should PATCH", done => 
        {
            new Http.MakeRequest()
                .setHost(API)
                .patch("/comments", { "postId": POST_ID, "testing": { "some": "thing" } })
                .then(httpResponse => expect(httpResponse.getStatusCode()).to.be.equal(404))
                .then(() => done());
        });
    });

    describe("HTTP METHOD: DELETE", () => 
    {
        it("Should DELETE", done => 
        {
            new Http.MakeRequest()
                .setHost(API)
                .delete(`/posts/${POST_ID}`)
                .then(httpResponse => expect(httpResponse.getStatusCode()).to.be.equal(Http.Response.HTTP_OK))
                .then(() => done());
        });
    });

    describe("Errors", () => 
    {
        it("Should test another port during request", done => 
        {
            new Http.MakeRequest()
                .setPort(3000)
                .get("/some-thing")
                .catch(err => expect(err.message).to.be.equal("connect ECONNREFUSED 127.0.0.1:3000"))
                .then(() => done());
        });
    });

});
