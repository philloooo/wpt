// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.zero.5
// Description:strokeRect of Nx0 pixels draws a closed line with joins
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("strokeRect of Nx0 pixels draws a closed line with joins");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#0f0';
ctx.lineWidth = 250;
ctx.lineJoin = 'round';
ctx.strokeRect(100, 25, 100, 0);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
