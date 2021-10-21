const sharedConfig = require("../../jest.config.js");
let moduleNameMapper = {
  "\\.(css|less|sass|scss)$": "<rootDir>/../../__mocks__/styleMock.js",
  "\\.(gif|ttf|eot|svg|wav)$": "<rootDir>/../../__mocks__/fileMock.js",
};

module.exports = {
  ...sharedConfig,
  rootDir: "./",
  moduleNameMapper: moduleNameMapper,
};
