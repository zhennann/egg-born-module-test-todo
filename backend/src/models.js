const todo = require('./model/todo.js');

module.exports = app => {
  const models = {
    todo,
  };
  return models;
};
