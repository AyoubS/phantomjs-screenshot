# phantomjs-screenshot
Load URLs using PhantomJS and take screenshots asynchronously.

## Usage

First, install dependencies PhantomJS and Async using the following command:

`npm install`

Configure the wanted hostname and probably the different routes.

```javascript
var async = require('async'),
    hostname = "m2s.zeens.press",
    routes = [
        "apps",
        "explore",
        "search",
        "stores",
        "contact"
    ];
```

Then lunch the program using:

`phantomjs batch-capture.js`
