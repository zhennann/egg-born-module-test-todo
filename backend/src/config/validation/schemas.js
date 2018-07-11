module.exports = app => {
  const schemas = {};
  // todo
  schemas.todo = {
    type: 'object',
    properties: {
      atomName: {
        type: 'string',
        ebType: 'text',
        ebTitle: 'What to do',
        notEmpty: true,
      },
      completed: {
        type: 'number',
        ebType: 'toggle',
        ebTitle: 'Completed',
      },
    },
  };
  // todo search
  schemas.todoSearch = {
    type: 'object',
    properties: {
      completed: {
        type: 'number',
        ebType: 'toggle',
        ebTitle: 'Completed',
      },
    },
  };
  return schemas;
};
