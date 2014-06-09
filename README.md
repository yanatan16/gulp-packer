[![status](https://secure.travis-ci.org/yanatan16/gulp-packer.png?branch=master)](https://travis-ci.org/yanatan16/gulp-packer)

Minifies javascript with [/packer/](http://dean.edwards.name/packer/)

## Usage

```javascript
var packer = require('gulp-packer')
  , streamify = require('gulp-streamify')

gulp.task('js', function() {
  gulp.src('./src/*.js')
    .pipe(streamify(packer({base62: true, shrink: true}))
    .pipe(gulp.dest('./build/js/'))
});
```

## Options

The options object supports the same options as the standard /packer/ minifier.

## LICENSE

(MIT License)

Copyright (c) 2014 Jon Eisen <jon@joneisen.me>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
