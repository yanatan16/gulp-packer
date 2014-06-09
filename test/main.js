var packer = require('..')
  , gutil = require('gulp-util')
  , path = require('path')
  , fs = require('fs')

  , testContent = fs.readFileSync(__dirname + '/fixtures/underscore.js')

var tests = module.exports = {}

tests.basic_usage = function (test) {
  packer()
    .on('data', testAgainst(test, 'underscore.packer.js'))
    .write(createTestFile())
}
tests.base62_usage = function (test) {
  packer({base62: true})
    .on('data', testAgainst(test, 'underscore.packer.base62.js'))
    .write(createTestFile())
}
tests.base62_shrink_usage = function (test) {
  packer({base62: true, shrink: true})
    .on('data', testAgainst(test, 'underscore.packer.base62.shrink.js'))
    .write(createTestFile())
}
tests.shrink_usage = function (test) {
  packer({shrink: true})
    .on('data', testAgainst(test, 'underscore.packer.shrink.js'))
    .write(createTestFile())
}

function testAgainst (test, filename) {
  var filepath = __dirname + '/fixtures/' + filename
    , contents = fs.readFileSync(filepath)
  test.expect(7)

  return function (newFile) {
    test.ok(newFile)
    test.ok(newFile.path)
    test.ok(newFile.relative)
    test.ok(newFile.contents)
    test.equal(newFile.path, __dirname + '/fixtures/' + 'underscore.min.js')
    test.equal(newFile.relative, 'underscore.min.js')
    test.equal(String(newFile.contents), contents)

    test.done()
  }
}

function createTestFile () {
  var filepath = __dirname + '/fixtures/underscore.js'
  var base = path.dirname(filepath);
  return new gutil.File({
    path: filepath,
    base: base,
    cwd: path.dirname(base),
    contents: testContent
  });
}