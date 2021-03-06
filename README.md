# Tasty Todos Angular 2

[![GitHub release](https://img.shields.io/github/release/rxlabs/tasty-todos-ng2.svg)](https://github.com/rxlabs/tasty-todos-ng2/releases)
[![GitHub license](https://img.shields.io/github/license/rxlabs/tasty-todos-ng2.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/rxlabs/tasty-todos-ng2.svg)](https://david-dm.org/rxlabs/tasty-todos-ng2)
[![David](https://img.shields.io/david/dev/rxlabs/tasty-todos-ng2.svg)](https://david-dm.org/rxlabs/tasty-todos-ng2#info=devDependencies)
[![Travis](https://img.shields.io/travis/rxlabs/tasty-todos-ng2.svg)](https://travis-ci.org/rxlabs/tasty-todos-ng2)

> Built from [makenew/tasty-brunch](https://github.com/makenew/tasty-brunch).

[![wercker status](https://app.wercker.com/status/a3558611a6f05cb448859bb29e10e4cf/m "wercker status")](https://app.wercker.com/project/bykey/a3558611a6f05cb448859bb29e10e4cf)

## Description

Example todo app built with Angular 2.

## Quickstart

```
$ git clone https://github.com/rxlabs/tasty-todos-ng2.git
$ cd tasty-todos-ng2
$ npm install
$ npm start
```

## Building and Development

### Source Code

The [tasty-todos-ng2 source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/rxlabs/tasty-todos-ng2.git
```

[tasty-todos-ng2 source]: https://github.com/rxlabs/tasty-todos-ng2

### Requirements

You will need [Node.js] with [npm].

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run-script`.
View them with

```
$ npm run
```

#### Production Build

Lint, test, generate, and optimize the production build to `public` with

```
$ npm run dist
```

#### Deploy to GitHub Pages

Build and deploy to GitHub Pages with

```
$ npm run deploy
```

The following environment variables can be set to customize the deploy:
`DEPLOY_REPO`, `DEPLOY_BRANCH`, `DEPLOY_NAME`, and `DEPLOY_EMAIL`.

##### Deploy from wrecker

Create a new wercker SSH key with the name `DEPLOY`,
add it to a new wercker deploy step,
and add it to the GitHub repository as a deploy key with write access.

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### gulp

Linting, deployment, and optimization is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint HTML, JavaScript, and Sass files with

```
$ npm run watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must be given
  as a fully qualified url.
  The recommended way to specify this value is with `DIGEST`, e.g.,
  assuming `app/assets/images/logo.png` exists,
  use `image: DIGEST(/images/logo.png)`.
- Instead of the `video` field, you may specify a `youtube` video id.
- The `twitter` fields are used for [Twitter Cards], but you must
  enable them for your domain with Twitter first.

[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/rxlabs/tasty-todos-ng2/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This app is licensed under the MIT license.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
