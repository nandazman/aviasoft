module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  globals: {
    NX: 'document'
  },

  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    curly: 'off',
    'no-unused-vars': 'off'
  }
}
