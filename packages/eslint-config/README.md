<div align="center">
<img src="https://imgur.com/JSYF54V.png" align="center" width="40%" alt="">

# @disguard/eslint-config

**ESLint configuration file for [disguard.org](https://disguard.org/).**

</div>

## Installation

```shell
# yarn
> yarn add -D @disguard/eslint-config
# npm 
> npm i -D @disguard/eslint-config
```

## Usage

Create a `.eslintrc` file:
```json
{
  "extends": "@disguard/eslint-config"
}
```

And a `tsconfig.eslint.json` file:
```json
{
  "extends": "@disguard/eslint-config",
  "include": ["src"]
}
```