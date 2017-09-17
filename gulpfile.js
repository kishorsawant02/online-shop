var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var basePath = __dirname + '/client/';
var htmlmin = require('gulp-htmlmin');
var gulpSequence = require('gulp-sequence')
var replace = require('gulp-replace');

gulp.task('html', function() {
    return gulp.src(basePath + 'pages/*.html')
        .pipe(gulp.dest(__dirname + '/rathi/'));
});
gulp.task('min-html', function() {
    return gulp.src(basePath + 'pages/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(__dirname + '/rathi/'));
});

gulp.task('templates-merge', function() {
    return gulp.src(basePath + 'components/hbs/*.html')
        .pipe(replace('{{KEY}}', 'var ux_template = '))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(basePath + '/components/hbs/'));
});

gulp.task('clean', function() {
    return gulp.src([__dirname + '/deploy',__dirname + '/rathi'], { read: false })
        .pipe(clean({ force: true }));
});

//Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src([basePath + 'components/scss/*.scss'])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(__dirname + '/deploy/css/'))
});

//minified Sass
gulp.task('min-sass', function() {
    return gulp.src([basePath + 'components/scss/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(__dirname + '/deploy/css/'))
});
// copy libs task
gulp.task("copy", function() {
    return gulp.src([basePath + '/lib/**/*']).pipe(gulp.dest(__dirname + '/deploy/'));
});

gulp.task("file-merge", function() {
    return gulp.src([basePath + "components/js/ractive.js", basePath + "components/hbs/templates.js", basePath + "components/js/*.js"])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(__dirname + '/deploy/js/'));
});

gulp.task("min-file-merge", function() {
    return gulp.src([basePath + "components/js/ractive.js", basePath + "components/hbs/templates.js", basePath + "components/js/*.js"])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(__dirname + '/deploy/js'));
});

gulp.task('watch', function() {
    gulp.watch(basePath + 'components/js/*.*', ['file-merge']);
    gulp.watch(basePath + 'components/hbs/*.*', ['hbs-concat','file-merge']);
    gulp.watch(basePath + 'components/scss/*.*', ['sass']);
    gulp.watch(basePath + 'pages/*.*', ['html']);
});

gulp.task("hbs-concat", function() {
    return gulp.src([basePath + "components/hbs/*.html"])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(replace('"', '\''))
        .pipe(replace('[KEY]', '"'))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(basePath + '/components/hbs/'));
});

// Default Task
gulp.task('default', gulpSequence('clean', 'sass', 'hbs-concat', 'file-merge', 'watch', 'html', 'copy'));
gulp.task('prod', gulpSequence('clean', 'min-sass', 'hbs-concat', 'min-file-merge', 'min-html'));
gulp.task('hbs', gulpSequence('hbs-concat'))