module.exports = app => {
  const schemas = require('./config/validation/schemas.js')(app);
  const meta = {
    base: {
      atoms: {
        todo: {
          info: {
            title: 'Todo',
            tableName: 'testTodo',
          },
          actions: {
            review: {
              code: 101,
              title: 'Review',
              flag: '1',
            },
          },
          flags: {
            1: {
              title: 'Reviewing',
            },
            2: {
              title: 'Reviewed',
            },
          },
          validator: 'todo',
          search: {
            validator: 'todoSearch',
          },
        },
      },
      functions: {
        createTodo: {
          title: 'Create Todo',
          scene: 'create',
          autoRight: 1,
          atomClassName: 'todo',
          action: 'create',
          actionModule: 'a-base',
          actionComponent: 'action',
          actionPath: '/a/base/atom/edit?atomId={{atomId}}&itemId={{itemId}}&atomClassId={{atomClassId}}&atomClassName={{atomClassName}}&atomClassIdParent={{atomClassIdParent}}',
          sorting: 1,
          menu: 1,
        },
        listTodo: {
          title: 'Todo List',
          scene: 'list',
          autoRight: 1,
          atomClassName: 'todo',
          action: 'read',
          actionPath: '/a/base/atom/list?module={{module}}&atomClassName={{atomClassName}}',
          sorting: 1,
          menu: 1,
        },
      },
    },
    validation: {
      validators: {
        todo: {
          schemas: 'todo',
        },
        todoSearch: {
          schemas: 'todoSearch',
        },
      },
      keywords: {},
      schemas: {
        todo: schemas.todo,
        todoSearch: schemas.todoSearch,
      },
    },
  };
  return meta;
};
