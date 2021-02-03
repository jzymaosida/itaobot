const {
    src,
    dest,
} = require("gulp");
const terser = require('gulp-terser');


function es(){
    return src('./src/common/*.js')
        .pipe(terser())
        .pipe(dest('./dist'));
}

exports.default = es;