[![Travis](https://img.shields.io/travis/parpeoficial/stackerjs-http.svg)](https://travis-ci.org/parpeoficial/stackerjs)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3ab7310303fc5193b4cf/test_coverage)](https://codeclimate.com/github/parpeoficial/stackerjs-http/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/3ab7310303fc5193b4cf/maintainability)](https://codeclimate.com/github/parpeoficial/stackerjs-http/maintainability)
[![dependencies Status](https://david-dm.org/parpeoficial/stackerjs-http/status.svg)](https://david-dm.org/parpeoficial/stackerjs-http)
[![npm](https://img.shields.io/npm/dt/stackerjs-http.svg)](https://www.npmjs.com/package/stackerjs)

[![NPM](https://nodei.co/npm/stackerjs-http.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stackerjs/)

![StackerJS](https://s3-sa-east-1.amazonaws.com/parpe.prod/StackerJS-logo.png)

# Http

Package for managing Http requests and responses in and outside [StackerJS](https://github.com/parpeoficial/stackerjs)

## Usage

### Response

```javascript
import { Http } from "stackerjs-http";

let httpResponse = new Http.Response();

httpResponse.setContent({ status: true });
httpResponse.setContent("Everything is ok"); // or
httpResponse.setContent(new Buffer("Something")); // or

httpResponse.setStatusCode(200);
```

### MakeRequest

```javascript
new Http.MakeRequest()
  .setPort(3000)
  .setHeader("Authorization", "Bearer some-token")
  .get("/v1/some/api", { limit: 10 }) // same for post(), put(), delete() or patch()
  .then(httpResponse => {
    // instance of Http.Response
    let content = httpResponse.getContent();
  });
```
