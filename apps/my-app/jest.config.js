module.exports = {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/my-app',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      babelConfig: '<rootDir>/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/my-app/tsconfig.spec.json',
      babelConfig: 'apps/my-app/babel.config.js',
    },
  },
};
