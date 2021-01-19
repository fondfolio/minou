# Minou

[![CI Status](https://github.com/fondfolio/minou/workflows/CI/badge.svg)](https://github.com/fondfolio/minou/actions)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Keep a Changelog v1.1.0 badge][changelog-badge]][changelog] [![Version 1.1.0 Badge][version-badge]][changelog]

## Development

We use yarn workspaces with lerna to make this work as a monorepo under the hood. There are 4 main packages in this repo:

| Package Name     | Location            | Description                                       | NPM Version                                                                                                                               |
| ---------------- | ------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| @minou/core      | /packages/core      | Library of `minou` React components               | <a href="https://badge.fury.io/js/%40minou%2Fcore"><img src="https://badge.fury.io/js/%40minou%2Fcore.svg" width="200px" /></a>           |
| @minou/icons     | /packages/core      | Collection of cohesive icons for use with `minou` | <a href="https://badge.fury.io/js/%40minou%2Ficons"><img src="https://badge.fury.io/js/%40minou%2Ficons.svg" width="200px" /></a>         |
| @minou/theme     | /packages/theme     | Default theme configuration for `minou`           | <a href="https://badge.fury.io/js/%40minou%2Ftheme"><img src="https://badge.fury.io/js/%40minou%2Ftheme.svg" width="200px" /></a>         |
| @minou/utilities | /packages/utilities | Simple utilities for use with `minou`             | <a href="https://badge.fury.io/js/%40minou%2Futilities"><img src="https://badge.fury.io/js/%40minou%2Futilities.svg" width="200px" /></a> |

### Getting started

You can clone and install the dependencies with the following commands:

```bash
git clone https://github.com/fondfolio/minou                  # clone this repo
cd ./minou                                                    # go to your local clone
yarn                                                          # install dependencies
```

Next, start the development server by running `yarn dev`.

### Testing changes

You can run `yarn tophat <destination>` to copy your local changes to a consuming project. For example, to test changes in the admin, run:

```
yarn tophat admin
```

### Publishing

You can publish new versions of the packages with the following commands:

```bash
git checkout main                                              # make sure you are on the main branch
yarn version-bump                                              # tag the new version
```

As of version 1.0.0, all changes require a [changelog](./CHANGELOG.md) entry.
