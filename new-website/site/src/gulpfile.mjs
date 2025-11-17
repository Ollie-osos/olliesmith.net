// ========================================
// Modern Gulp Build System with Live Reload
// ========================================

import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import pug from 'gulp-pug';
import uglify from 'gulp-uglify';
import image from 'gulp-image';
import header from 'gulp-header';
import size from 'gulp-size';
import browserSyncLib from 'browser-sync';
import { readFileSync } from 'fs';
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

const sass = gulpSass(dartSass);
const browserSync = browserSyncLib.create();

const paths = {
  scss: './scss/**/*.scss',
  js: './js/**/*.js',
  pug: './html/**/*.pug',
  img: './img/**/*',
  fonts: './fonts/**/*',
  dist: '../dist',
};

const banner = `/* 
* Cirrus ${pkg.version}
* Stanley Lim, Copyright ${new Date().getFullYear()}
* https://spiderpig86.github.io/Cirrus
*/\n`;

// ----------------------------------------
// Compile SCSS → CSS
// ----------------------------------------
export function compile() {
  return gulp
    .src(['scss/core/default.scss', paths.scss])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(header(banner))
    .pipe(size({ title: 'Compiled CSS' }))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream()); // inject CSS without full reload
}

// ----------------------------------------
// Minify CSS
// ----------------------------------------
export function minifyCSS() {
  return gulp
    .src(`${paths.dist}/css/styles.css`)
    .pipe(
      cleanCSS(
        {
          level: {
            1: { all: true, normalizeUrls: false },
            2: {
              removeDuplicateRules: true,
              reduceNonAdjacentRules: true,
              removeDuplicateFontRules: true,
              removeDuplicateMediaBlocks: true,
              mergeAdjacentRules: true,
              mergeIntoShorthands: true,
              mergeMedia: true,
              mergeNonAdjacentRules: true,
              removeEmpty: true,
            },
          },
        },
        details => {
          console.log(`CSS Minified: ${details.name}`);
          console.log(`Original: ${details.stats.originalSize} → Minified: ${details.stats.minifiedSize}`);
        }
      )
    )
    .pipe(header(banner))
    .pipe(size({ title: 'Minified CSS' }))
    .pipe(concat('cirrus.min.css'))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Compile Pug → HTML
// ----------------------------------------
export function html() {
  return gulp
    .src(paths.pug)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(`${paths.dist}/html`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Process Images
// ----------------------------------------
export function images() {
  return gulp
    .src(paths.img)
    .pipe(image())
    .pipe(gulp.dest(`${paths.dist}/img`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Copy fonts to dist
// ----------------------------------------
export function fonts() {
  return gulp
    .src(paths.fonts)
    .pipe(gulp.dest(`${paths.dist}/fonts`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Compile JS
// ----------------------------------------
export function scripts() {
  return gulp
    .src(paths.js)
    .pipe(concat('scripts.js'))
    // .pipe(uglify()) // uncomment if you want JS minification
    .pipe(gulp.dest(`${paths.dist}/js`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Core SCSS → CSS
// ----------------------------------------
export function core() {
  return gulp
    .src(['./scss/core/*.scss', './scss/utils/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('cirrus-core.css'))
    .pipe(header(banner))
    .pipe(size({ title: 'Core CSS' }))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Minify Core CSS
// ----------------------------------------
export function minifyCore() {
  return gulp
    .src(`${paths.dist}/css/cirrus-core.css`)
    .pipe(cleanCSS())
    .pipe(header(banner))
    .pipe(size({ title: 'Minified Core CSS' }))
    .pipe(concat('cirrus-core.min.css'))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(browserSync.stream());
}

// ----------------------------------------
// Serve + Watch (BrowserSync)
// ----------------------------------------
export function serve() {
  browserSync.init({
    server: {
      baseDir: `${paths.dist}/html`,
    },
    index: 'index.html',
    open: true,
    notify: false,
  });

  // Watch source files and re-run relevant tasks
  gulp.watch(paths.scss, gulp.series(compile, minifyCSS));
  gulp.watch(paths.js, scripts);
  gulp.watch(paths.pug, html);
  gulp.watch(paths.img, images);
  gulp.watch(paths.fonts, fonts);
}

// ----------------------------------------
// Default Build Task
// ----------------------------------------
export default gulp.parallel(
  gulp.series(compile, minifyCSS),
  gulp.series(core, minifyCore),
  scripts,
  html,
  images,
  fonts
); 

// ----------------------------------------
// Watch Task (Live Reload)
// ----------------------------------------
export const watch = serve;
