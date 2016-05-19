/*
    requires: phantomjs, async
    usage: phantomjs batch-capture.js
*/
var async = require('async'),
    hostname = "m2s.zeens.press",
    routes = [
        "apps",
        "explore",
        "search",
        "stores",
        "contact"
    ];

function capture(routes, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: 1280,
        height: 800
    };
    page.zoomFactor = 1;
    page.open('http://' + hostname + '/' + routes , function (status) {
        var filename = routes + '.png';
        page.render('./' + hostname + '/' + filename);
        page.close();
        callback.apply();
    });
}

async.eachSeries(routes, capture, function (e) {
    if (e) console.log(e);
    console.log('done!');
    phantom.exit();
});
