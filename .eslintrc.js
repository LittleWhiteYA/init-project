module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'no-case-declarations': 'off',
    'object-shorthand': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-else-return': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
  plugins: ['babel', 'prettier'],
};
