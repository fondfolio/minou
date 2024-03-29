# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Rename <Actions /> `primaryAction` prop to `primaryActions`
- Need to manually pass in the `variant` and `type` action properties to <Action /> `primaryAction`. To replicate previous behaviour, pass `{variant: 'primary', type: 'submit'}`
- `Button` now wraps list of buttons in a `<Flex />` and `<Box />` elements

## [1.0.0] - TBD

## [0.0.47] - 24/01/2021

- `<Modal />` traps focus

## [0.0.46] - 22/01/2021

- Adds large size for `<Button />`

## [0.0.45] - 20/01/2021

- Adds `truncate` and `reverseTruncate` helpers.
- Adds `<Truncate />` component.
- Adds `InlineFieldSet />` component.
- Additional style support for markdown blockquot and images
