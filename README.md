# Mutatable [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/mutatable/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/mutatable)

A mutatable value that can still be changed after being exported.

[![NPM Badge](https://nodei.co/npm/mutatable.png)](https://npmjs.com/package/mutatable)

## Install

```sh
npm install mutatable
```

## Usage

```js
const Mutatable = require("mutatable");
const myVal = new Mutatable();

someAsyncOperation().then(res => (myVal.exportable = res));

module.exports = myVal.exportable;
```

## API

### `class` Mutatable(initialData?)

#### initialData

Type: `any`

The intial data to set.

### `instance` Mutatable

#### exportable

Type: `any`

The value which can be exported and modified.
