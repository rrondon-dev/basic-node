module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'node', 'import', 'promise'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
