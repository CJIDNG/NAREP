const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Atoms': path.resolve(__dirname,
        './src/components/UI/atoms/'),
      '@Molecules': path.resolve(__dirname, './src/components/UI/molecules/'),
      '@Organisms': path.resolve(__dirname, './src/components/UI/organisms/'),
      '@Pages': path.resolve(__dirname,
        './src/components/pages'),
      '@Redux': path.resolve(__dirname,
        './src/redux/'),
      '@Routes': path.resolve(__dirname, './src/routes/'),
      '@Utils': path.resolve(__dirname, './src/utils/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@Components/(.*)$': '<rootDir>/src/components/$1',
        '^@Atoms/(.*)$':
          '<rootDir>/src/components/UI/atoms/$1',
        '^@Molecules/(.*)$': '<rootDir>/src/components/UI/molecules/$1',
        '^@Organisms/(.*)$': '<rootDir>/src/components/UI/organisms/$1',
        '^@Pages/(.*)$': '<rootDir>/src/components/pages/$1',
        '^@Redux/(.*)$':
          '<rootDir>/src/redux/$1',
        '^Routes/(.*)$': '<rootDir>/src/routes/$1',
        '^Utils/(.*)$': '<rootDir>/src/utils/$1',
      },
    },
  },
};
