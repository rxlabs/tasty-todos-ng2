module.exports = function (config) {
  const ngPackages = [
    'core'
  ]

  config.set({
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    logLevel: config.LOG_INFO,

    browsers: [
      'Chrome'
    ],

    reporters: [
      'progress'
    ],

    frameworks: [
      'systemjs',
      'jasmine'
    ],

    basePath: './',

    files: [
      {pattern: 'app/**/*.ts', included: false, served: true},
      {pattern: 'app/**/*.spec.ts', included: true, served: true},
      {pattern: 'node_modules/rxjs/**/*.js',
        included: false, served: true, watched: false},
      {pattern: 'node_modules/\@angular/**/*.js',
        included: false, served: true, watched: false}
    ],

    systemjs: {
      includeFiles: [
        'node_modules/reflect-metadata/Reflect.js'
      ],

      config: {
        transpiler: 'typescript',

        paths: {
          'es6-module-loader':
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'systemjs': 'node_modules/systemjs/dist/system.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'typescript': 'node_modules/typescript/lib/typescript.js'
        },

        map: {
          'app': 'app',
          'rxjs': 'node_modules/rxjs',
          '@angular': 'node_modules/@angular'
        },

        packages: Object.assign.apply(this, [{
          'app': {defaultExtension: 'ts'},
          'rxjs': {main: 'index.js', defaultExtension: 'js'}
        }].concat(ngPackages.map((package) => (
          {[`@angular/${package}`]: {main: 'index.js', defaultExtension: 'js'}})
        )))
      }
    }
  })
}
