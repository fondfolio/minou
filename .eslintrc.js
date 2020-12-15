module.exports = {
  parserOptions: {
    project: [
      'packages/core/tsconfig.json',
      'packages/theme/tsconfig.json',
      'packages/docs/tsconfig.json',
      'packages/minou/tsconfig.json',
      'packages/utilities/tsconfig.json',
    ],
  },
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/typescript-type-checking',
    'plugin:@shopify/react',
    'plugin:@shopify/node',
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
  },
};
