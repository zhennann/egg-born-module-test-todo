module.exports = app => {
  const schemas = require('./config/validation/schemas.js')(app);
  const meta = {
    base: {
      atoms: {
        todo: {
          info: {
            title: 'Todo',
            tableName: 'testTodo',
            meta: {
              comment: false,
              attachment: false,
            },
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
          sorting: 1,
          menu: 1,
        },
        listTodo: {
          title: 'Todo List',
          scene: 'list',
          autoRight: 1,
          atomClassName: 'todo',
          action: 'read',
          sorting: 1,
          menu: 1,
        },
        testRightLocale: {
          title: 'TestRightLocale',
          scene: 'tools',
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
