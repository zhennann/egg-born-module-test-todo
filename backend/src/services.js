const version = require('./service/version.js');
const todo = require('./service/todo.js');

module.exports = app => {
  const services = {
    version,
    todo,
  };
  return services;
};
