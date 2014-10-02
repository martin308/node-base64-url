var fs = require('fs');
var test = require("tap").test;
var converter = require('../index');

function loadKitten() {
  var kitten = fs.readFileSync('kitten.jpg');
  var base64 = new Buffer(kitten).toString('base64');
  return base64;
}

test("unsafe characters are removed", function (t) {
  var base64 = loadKitten();
  var safeBase64 = converter.toBase64WebSafeString(base64);
  t.equal(safeBase64.indexOf('+'), -1);
  t.equal(safeBase64.indexOf('/'), -1);
  t.end()
});

test("can convert to and from", function (t) {
  var base64 = loadKitten();
  var safeBase64 = converter.toBase64WebSafeString(base64);
  var unsafeBase64 = converter.fromBase64WebSafeString(safeBase64);
  t.equal(unsafeBase64, base64);
  t.end();
});
