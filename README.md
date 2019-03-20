# React Component Library with Lerna

[![Dependencies](https://img.shields.io/david/natterstefan/react-component-library-lerna.svg)](https://github.com/natterstefan/react-component-library-lerna/blob/master/package.json)
[![DevDependencies](https://img.shields.io/david/dev/natterstefan/react-component-library-lerna.svg)](https://github.com/natterstefan/react-component-library-lerna/blob/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/natterstefan/react-component-library-lerna/badge.svg)](https://snyk.io/test/github/natterstefan/react-component-library-lerna)
[![GitHub license](https://img.shields.io/github/license/natterstefan/react-component-library-lerna.svg)](https://github.com/natterstefan/react-component-library-lerna/blob/master/LICENCE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Build your own React component library managed with lerna and presented with
storybook.

## Features

- [react-hooks](https://reactjs.org/docs/hooks-overview.html) support ⚛
- integrated [storybook@5](https://storybook.js.org) with examples :books:
- example components built with [styled-components](https://github.com/styled-components/styled-components) 💅
- [ESLint](https://github.com/eslint/eslint), [stylelint](https://github.com/stylelint/stylelint)
  and [remark](https://github.com/remarkjs/remark) and [prettier](https://github.com/prettier/prettier)
  integration
- [jest](https://github.com/facebook/jest) 🃏 and [enzyme](https://github.com/airbnb/enzyme)
  for testing
- [built-in cli]: create new component packages within seconds (`yarn commander --help`)

## Getting started

Use `yarn` instead of `npm`, because we rely on [`yarn`'s `workspaces` feature](https://yarnpkg.com/lang/en/docs/workspaces/).

```bash
yarn
yarn bootstrap
yarn start
```

Now you can open storybook at [http://localhost:9001](http://localhost:9001).

## Docs

Please, be patient. I will soon add "How to" sections. They are going to tell you:

- how to use this example component library for your own projects,
- some things I learned about lerna and monorepos (eg. yarn workspaces are pretty neat),
- how to use storybook (eg. creating stories, ...),
- how to publish packages to your private npm registry (eg. with [verdaccio](https://verdaccio.org/)),
- and finally how to create a docker image with an example app.

Stay tuned!

### How to add new dependencies

Adding `devDependencies` looks like this:

```sh
yarn add <package-name> --dev -W
```

This will add the dependency too the root `package.json` and make it available
to all packages.

Adding a new `dependency` for all or one of the packages looks like this:

```sh
npx lerna add <package-name>
```

One can read more about the command (eg. how to scope it, etc.) [here](https://github.com/lerna/lerna/tree/master/commands/add).

### How to test publishing

This repository comes with a pre-configured [verdaccio](https://verdaccio.org/)
(private npm registry) setup. All you need to do is start it with:

```bash
cd localdev
docker-compose -d # will start the verdaccio docker image
```

Now, open [http://localhost:4873/](http://localhost:4873/). You should see
the UI of verdaccio on your screen now. That's great. Because it means you can
now publish the packages to this npm registry. Usually you have to login to
the registry, but the [.npmrc](./.npmrc) already includes the `_authToken`. So
`yarn publish` in one of the packages will publish it, or with `yarn publish` in
the root folder (uses lerna).

In order to publish your packages to npm, simply change the `registry` property
in each `package.json`'s `publishConfig`.

## Contribution

PRs are welcome and I am happy if you want to contribute! Just let me know,
please.

### Forks

If this repository is forked and I see further progress on the forked repo, I am
very happy to list your work here. It's awesome to see, when people start using
and moving this repository even further.

- [https://github.com/sebastianescribano/react-component-library-lerna](https://github.com/sebastianescribano/react-component-library-lerna):
  they are really pushing it. They integrated a CLI to create packages from a
  template, for instance.

## Licence

[Apache 2.0](LICENCE)

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/natterstefan">
          <img width="150" height="150" src="https://github.com/natterstefan.png?v=3&s=150">
          </br>
          Stefan Natter
        </a>
        <div>
          <a href="https://twitter.com/natterstefan">
            <img src="https://img.shields.io/twitter/follow/natterstefan.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
