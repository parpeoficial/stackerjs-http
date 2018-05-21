import { expect } from "chai";
import { Http } from "./../../src";

describe("Unit/ResponseTest", () => 
{
    describe("Setting Header", () => 
    {
        it("Should set header", () => 
        {
            expect(new Http.Response().setHeaders({ auth: "123" }).getHeaders()).to.have.property("auth");
        });
    });

    describe("Setting Content", () => 
    {
        it("Should not define content if different of string, Buffer or Array/Object", () => 
        {
            expect(new Http.Response().setContent(1).getContent()).to.be.null;
        });

        it("Should set content as string", () => 
        {
            // expect(response("OK").getContent()).to.be.equal("OK");
            expect(new Http.Response().setContent("OK").getContent()).to.be.equal("OK");
        });

        it("Should set content as Array", () => 
        {
            expect(new Http.Response().setContent([1, 2, 3]).getContent()).to.be.an("array");
        });
    });
});
