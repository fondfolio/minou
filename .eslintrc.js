module.exports = {
  parserOptions: {
    project: [
      'packages/core/tsconfig.json',
      'packages/theme/tsconfig.json',
      'packages/docs/tsconfig.json',
      'packages/minou/tsconfig.json',
      'packages/utilities/tsconfig.json',
      'packages/icons/tsconfig.json',
    ],
  },
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',
    'plugin:@shopify/node',
    'plugin:@shopify/typescript-type-checking',
    'plugin:@shopify/prettier',
  ],
  ignorePatterns: [
    'node_modules/',
    'packages/*/build/',
    'packages/*/*.d.ts',
    'packages/*/*.js',
    '!packages/*/.eslintrc.js',
    'packages/*/*.mjs',
    'packages/*/*.node',
    'packages/*/*.esnext',
    'packages/**/tests/fixtures/',
  ],
  rules: {
    'lines-around-comment': 'off',
    '@typescript-eslint/array-type': ['error', {defaultOption: 'array'}],
    '@typescript-eslint/unbound-method': 'off',
    'react/no-array-index-key': 'off',
  },
};
