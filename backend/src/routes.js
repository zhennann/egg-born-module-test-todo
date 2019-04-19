const version = require('./controller/version.js');
const todo = require('./controller/todo.js');

module.exports = app => {
  const routes = [
    // version
    { method: 'post', path: 'version/update', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/init', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/test', controller: version, middlewares: 'test' },
    // todo
    { method: 'post', path: 'todo/create', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/read', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/select', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/write', controller: todo, middlewares: 'inner,validate',
      meta: {
        auth: { enable: false },
        validate: { validator: 'todo', data: 'item' },
      },
    },
    { method: 'post', path: 'todo/delete', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/action', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
    { method: 'post', path: 'todo/enable', controller: todo, middlewares: 'inner', meta: { auth: { enable: false } } },
  ];
  return routes;
};
