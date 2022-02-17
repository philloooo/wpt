// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.setTransform.nonfinite
// Description:setTransform() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("setTransform() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.translate(100, 10);
ctx.setTransform(Infinity, 0, 0, 0, 0, 0);
ctx.setTransform(-Infinity, 0, 0, 0, 0, 0);
ctx.setTransform(NaN, 0, 0, 0, 0, 0);
ctx.setTransform(0, Infinity, 0, 0, 0, 0);
ctx.setTransform(0, -Infinity, 0, 0, 0, 0);
ctx.setTransform(0, NaN, 0, 0, 0, 0);
ctx.setTransform(0, 0, Infinity, 0, 0, 0);
ctx.setTransform(0, 0, -Infinity, 0, 0, 0);
ctx.setTransform(0, 0, NaN, 0, 0, 0);
ctx.setTransform(0, 0, 0, Infinity, 0, 0);
ctx.setTransform(0, 0, 0, -Infinity, 0, 0);
ctx.setTransform(0, 0, 0, NaN, 0, 0);
ctx.setTransform(0, 0, 0, 0, Infinity, 0);
ctx.setTransform(0, 0, 0, 0, -Infinity, 0);
ctx.setTransform(0, 0, 0, 0, NaN, 0);
ctx.setTransform(0, 0, 0, 0, 0, Infinity);
ctx.setTransform(0, 0, 0, 0, 0, -Infinity);
ctx.setTransform(0, 0, 0, 0, 0, NaN);
ctx.setTransform(Infinity, Infinity, 0, 0, 0, 0);
ctx.setTransform(Infinity, Infinity, Infinity, 0, 0, 0);
ctx.setTransform(Infinity, Infinity, Infinity, Infinity, 0, 0);
ctx.setTransform(Infinity, Infinity, Infinity, Infinity, Infinity, 0);
ctx.setTransform(Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.setTransform(Infinity, Infinity, Infinity, Infinity, 0, Infinity);
ctx.setTransform(Infinity, Infinity, Infinity, 0, Infinity, 0);
ctx.setTransform(Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.setTransform(Infinity, Infinity, Infinity, 0, 0, Infinity);
ctx.setTransform(Infinity, Infinity, 0, Infinity, 0, 0);
ctx.setTransform(Infinity, Infinity, 0, Infinity, Infinity, 0);
ctx.setTransform(Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.setTransform(Infinity, Infinity, 0, Infinity, 0, Infinity);
ctx.setTransform(Infinity, Infinity, 0, 0, Infinity, 0);
ctx.setTransform(Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.setTransform(Infinity, Infinity, 0, 0, 0, Infinity);
ctx.setTransform(Infinity, 0, Infinity, 0, 0, 0);
ctx.setTransform(Infinity, 0, Infinity, Infinity, 0, 0);
ctx.setTransform(Infinity, 0, Infinity, Infinity, Infinity, 0);
ctx.setTransform(Infinity, 0, Infinity, Infinity, Infinity, Infinity);
ctx.setTransform(Infinity, 0, Infinity, Infinity, 0, Infinity);
ctx.setTransform(Infinity, 0, Infinity, 0, Infinity, 0);
ctx.setTransform(Infinity, 0, Infinity, 0, Infinity, Infinity);
ctx.setTransform(Infinity, 0, Infinity, 0, 0, Infinity);
ctx.setTransform(Infinity, 0, 0, Infinity, 0, 0);
ctx.setTransform(Infinity, 0, 0, Infinity, Infinity, 0);
ctx.setTransform(Infinity, 0, 0, Infinity, Infinity, Infinity);
ctx.setTransform(Infinity, 0, 0, Infinity, 0, Infinity);
ctx.setTransform(Infinity, 0, 0, 0, Infinity, 0);
ctx.setTransform(Infinity, 0, 0, 0, Infinity, Infinity);
ctx.setTransform(Infinity, 0, 0, 0, 0, Infinity);
ctx.setTransform(0, Infinity, Infinity, 0, 0, 0);
ctx.setTransform(0, Infinity, Infinity, Infinity, 0, 0);
ctx.setTransform(0, Infinity, Infinity, Infinity, Infinity, 0);
ctx.setTransform(0, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.setTransform(0, Infinity, Infinity, Infinity, 0, Infinity);
ctx.setTransform(0, Infinity, Infinity, 0, Infinity, 0);
ctx.setTransform(0, Infinity, Infinity, 0, Infinity, Infinity);
ctx.setTransform(0, Infinity, Infinity, 0, 0, Infinity);
ctx.setTransform(0, Infinity, 0, Infinity, 0, 0);
ctx.setTransform(0, Infinity, 0, Infinity, Infinity, 0);
ctx.setTransform(0, Infinity, 0, Infinity, Infinity, Infinity);
ctx.setTransform(0, Infinity, 0, Infinity, 0, Infinity);
ctx.setTransform(0, Infinity, 0, 0, Infinity, 0);
ctx.setTransform(0, Infinity, 0, 0, Infinity, Infinity);
ctx.setTransform(0, Infinity, 0, 0, 0, Infinity);
ctx.setTransform(0, 0, Infinity, Infinity, 0, 0);
ctx.setTransform(0, 0, Infinity, Infinity, Infinity, 0);
ctx.setTransform(0, 0, Infinity, Infinity, Infinity, Infinity);
ctx.setTransform(0, 0, Infinity, Infinity, 0, Infinity);
ctx.setTransform(0, 0, Infinity, 0, Infinity, 0);
ctx.setTransform(0, 0, Infinity, 0, Infinity, Infinity);
ctx.setTransform(0, 0, Infinity, 0, 0, Infinity);
ctx.setTransform(0, 0, 0, Infinity, Infinity, 0);
ctx.setTransform(0, 0, 0, Infinity, Infinity, Infinity);
ctx.setTransform(0, 0, 0, Infinity, 0, Infinity);
ctx.setTransform(0, 0, 0, 0, Infinity, Infinity);
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -10, 100, 50);
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
