module.exports = {
  extends: ['conermurphy'],
  ignorePatterns: ['/**/cdk.out/'],
  root: true,
  overrides: [
    {
      files: ['./app/*.ts', './app/*.tsx'],
      plugins: ['import', '@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['conermurphy'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {
            tsconfigRootDir: __dirname,
            project: './tsconfig.json',
          },
          next: {
            rootDir: './',
          },
        },
      },
    },
  ],
  rules: {
    'import/extensions': 'off',
  },
};
