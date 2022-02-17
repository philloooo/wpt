// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.globalAlpha.canvaspattern
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var ctx2 = offscreenCanvas2.getContext('2d');
ctx2.fillStyle = '#f00';
ctx2.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = ctx.createPattern(offscreenCanvas2, 'no-repeat');
ctx.globalAlpha = 0.01; // avoid any potential alpha=0 optimisations
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 2,253,0,255, "50,25", "2,253,0,255", 2);
t.done();

});
done();
