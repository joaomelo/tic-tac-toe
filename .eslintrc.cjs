const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'double',
  semi: true,
  'object-property-newline': true
})

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended", 
    "plugin:perfectionist/recommended-natural", 
    "plugin:vue/vue3-recommended",     
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  plugins: ['@stylistic'],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
  },
  rules: {
    'no-duplicate-imports': 'error',
    'semi': ["error", "always"],
    "no-console": [ "warn", { allow: ["warn", "error", "info"] } ],

    ...customized.rules,    
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],    
    '@stylistic/object-curly-newline': ["error", {
      "ObjectExpression": { "consistent": true },
      "ObjectPattern": { "consistent": true },
      "ImportDeclaration": { "consistent": true },
      "ExportDeclaration": { "consistent": true }
    }],

    // vue plugin already has a standard way to sort that considers the attribute type like if it is an event or a id definition
    'perfectionist/sort-vue-attributes': 'off',

    "vue/component-definition-name-casing": ["error", "kebab-case"],

    "@typescript-eslint/no-unsafe-member-access": 'off',
    "@typescript-eslint/no-unsafe-assignment": 'off'
  },
};
