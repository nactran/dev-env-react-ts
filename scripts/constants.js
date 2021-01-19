const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const IS_DEV = process.env.NODE_ENV !== 'production';

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 8080;

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  IS_DEV,
  PROJECT_PATH,
  PROJECT_NAME,
};
