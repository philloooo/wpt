// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.image.section
// Description:Shadows are not drawn for areas outside image source rectangles
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows are not drawn for areas outside image source rectangles");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowOffsetY = 50;
ctx.shadowColor = '#f00';
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/redtransparent.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    createImageBitmap(response).then(bitmap => {
        ctx.drawImage(bitmap, 50, 0, 50, 50, 0, -50, 50, 50);
        _assertPixelApprox(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
        _assertPixelApprox(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);
    }, t_fail);
}).then(t_pass, t_fail);

});
done();
